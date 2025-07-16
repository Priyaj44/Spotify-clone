import sqlite3
import csv

# Connect to your SQLite DB
conn = sqlite3.connect("your_database.db")
cursor = conn.cursor()

# Fetch your data
cursor.execute("SELECT * FROM your_table_name")  # replace with your table name
rows = cursor.fetchall()
columns = [desc[0] for desc in cursor.description]

# Write fully quoted CSV
with open("output.csv", "w", newline='', encoding="utf-8") as f:
    writer = csv.writer(f, quoting=csv.QUOTE_ALL, escapechar='\\')
    writer.writerow(columns)
    writer.writerows(rows)

conn.close()
