import pytest
from main import userManager

@pytest.fixture
def user_manager():
    """Fixture to create a userManager instance before each test."""
    return userManager()

def test_add_user(user_manager):
    """Test adding a user."""
    assert user_manager.add_user("testuser", "tes@123") == True
    assert user_manager.get_user("testuser") == "tes@123"
    
def test_add_existing_user(user_manager):
    """Test adding an existing user raises ValueError."""
    user_manager.add_user("testuser", "tes@123")
    with pytest.raises(ValueError, match="User already exists"):
        user_manager.add_user("testuser", "test@123")