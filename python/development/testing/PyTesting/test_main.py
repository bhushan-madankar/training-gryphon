# from main import get_weather

# def test_get_weather():
#     assert get_weather(21) == 'hot'
#     assert get_weather(25) != 'cold'
import pytest
from main import get_weather, add, divide
def test_add():
    assert add(2, 3) == 5, "Test case 1 failed"
    assert add(-1, 1) == 0, "Test case 2 failed"
    assert add(0, 0) == 0, "Test case 3 failed"

def test_divide():
    with pytest.raises(ZeroDivisionError, match="Cannot divide by zero"):
        divide(10, 0)