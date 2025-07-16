import pygame
import chess
import os

# Constants
WIDTH, HEIGHT = 640, 640
DIMENSION = 8
SQ_SIZE = WIDTH // DIMENSION
WHITE = (240, 217, 181)
BROWN = (181, 136, 99)
PIECES = {}

# Checkbox Class to handle checkbox UI
class Checkbox:
    def __init__(self, x, y, size=20):
        self.x = x
        self.y = y
        self.size = size
        self.checked = False

    def draw(self, screen):
        # Draw the checkbox outline
        pygame.draw.rect(screen, (0, 0, 0), pygame.Rect(self.x, self.y, self.size, self.size), 2)
        # If checked, fill it in
        if self.checked:
            pygame.draw.rect(screen, (0, 255, 0), pygame.Rect(self.x + 2, self.y + 2, self.size - 4, self.size - 4))

    def toggle(self, pos):
        # Check if the mouse click is within the checkbox area
        if self.x <= pos[0] <= self.x + self.size and self.y <= pos[1] <= self.y + self.size:
            self.checked = not self.checked

# Load images from assets folder
def load_images():
    pieces = ['r', 'n', 'b', 'q', 'k', 'p', 'R', 'N', 'B', 'Q', 'K', 'P']
    for piece in pieces:
        PIECES[piece] = pygame.transform.scale(
            pygame.image.load(os.path.join("Assets", f"{piece}.png")), (SQ_SIZE, SQ_SIZE)
        )

# Draw chessboard
def draw_board(screen):
    for row in range(DIMENSION):
        for col in range(DIMENSION):
            color = WHITE if (row + col) % 2 == 0 else BROWN
            pygame.draw.rect(screen, color, pygame.Rect(col * SQ_SIZE, row * SQ_SIZE, SQ_SIZE, SQ_SIZE))

# Draw chess pieces
def draw_pieces(screen, board):
    for square in chess.SQUARES:
        piece = board.piece_at(square)
        if piece:
            row = 7 - (square // 8)
            col = square % 8
            screen.blit(PIECES[str(piece)], pygame.Rect(col * SQ_SIZE, row * SQ_SIZE, SQ_SIZE, SQ_SIZE))

# Main function
def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Chess Game - Pygame")
    clock = pygame.time.Clock()
    board = chess.Board()
    load_images()

    selected_square = None
    show_legal_moves_checkbox = Checkbox(20, HEIGHT - 40)

    running = True
    while running:
        screen.fill((255, 255, 255))  # Clear screen

        draw_board(screen)
        draw_pieces(screen, board)

        # Draw the checkbox
        show_legal_moves_checkbox.draw(screen)

        # Check if the checkbox is selected
        if show_legal_moves_checkbox.checked:
            # Logic to highlight legal moves (example)
            for move in board.legal_moves:
                start_square = move.from_square
                end_square = move.to_square
                row_start = 7 - (start_square // 8)
                col_start = start_square % 8
                row_end = 7 - (end_square // 8)
                col_end = end_square % 8
                pygame.draw.circle(screen, (0, 255, 0), (col_end * SQ_SIZE + SQ_SIZE // 2, row_end * SQ_SIZE + SQ_SIZE // 2), 10)

        pygame.display.flip()
        clock.tick(15)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

            elif event.type == pygame.MOUSEBUTTONDOWN:
                pos = pygame.mouse.get_pos()
                show_legal_moves_checkbox.toggle(pos)  # Toggle checkbox on click
                if show_legal_moves_checkbox.checked:
                    print("Legal moves will be shown")
                else:
                    print("Legal moves will be hidden")

                x, y = pygame.mouse.get_pos()
                col = x // SQ_SIZE
                row = 7 - (y // SQ_SIZE)
                clicked_square = chess.square(col, row)

                if selected_square is None:
                    selected_square = clicked_square
                else:
                    move = chess.Move(selected_square, clicked_square)
                    if move in board.legal_moves:
                        board.push(move)
                    selected_square = None

    pygame.quit()

if __name__ == "__main__":
    main()
