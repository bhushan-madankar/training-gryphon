import sqlite3

def save_user(name,age):
    conn = sqlite3.connect('test.db')
    cursor = conn.cursor()
    # cursor.execute('CREATE TABLE IF NOT EXISTS users (name TEXT, age INTEGER)')
    cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', (name, age))
    conn.commit()
    conn.close()
    
    
