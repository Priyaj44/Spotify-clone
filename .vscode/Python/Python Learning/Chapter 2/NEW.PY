class ChessBoard:
    def __init__(self):
        self.board = self.create_board()
        self.current_turn = 'W'  # White starts

    def create_board(self):
        # Create an 8x8 chess board with pieces in starting positions
        return [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ]

    def print_board(self):
        for row in self.board:
            print(' '.join(row))
        print()

    def move_piece(self, start, end):
        start_row, start_col = start
        end_row, end_col = end
        piece = self.board[start_row][start_col]

        # Basic validation
        if piece == '.' or (piece.isupper() and self.current_turn == 'B') or (piece.islower() and self.current_turn == 'W'):
            print("Invalid move!")
            return False

        # Move the piece
        self.board[end_row][end_col] = piece
        self.board[start_row][start_col] = '.'
        self.current_turn = 'B' if self.current_turn == 'W' else 'W'
        return True

    def parse_position(self, position):
        col = ord(position[0]) - ord('a')
        row = 8 - int(position[1])
        return row, col

    def is_valid_position(self, position):
        return len(position) == 2 and position[0] in 'abcdefgh' and position[1] in '12345678'


def main():
    chess_board = ChessBoard()
    chess_board.print_board()

    while True:
        move = input(f"{chess_board.current_turn}'s turn. Enter your move (e.g., e2 e4): ")
        try:
            start_pos, end_pos = move.split()
            if chess_board.is_valid_position(start_pos) and chess_board.is_valid_position(end_pos):
                start = chess_board.parse_position(start_pos)
                end = chess_board.parse_position(end_pos)
                if chess_board.move_piece(start, end):
                    chess_board.print_board()
                else:
                    print("Move failed. Try again.")
            else:
                print("Invalid position format. Use 'e2' format.")
        except ValueError:
            print("Invalid input. Please enter two positions separated by a space.")


if __name__ == "__main__":
    main()
