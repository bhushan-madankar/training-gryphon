class userManager:
    def __init__(self):
        self.users = {}
        
    def add_user(self, username, email):
        if username in self.users:
            raise ValueError("User already exists")
        self.users[username] = email
        # return f"User {username} added successfully"
        return True
    
    def get_user(self, username):
        if username not in self.users:
            raise ValueError("User not found")
        return self.users.get(username)