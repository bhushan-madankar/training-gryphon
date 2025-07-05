import pytest 
from main import is_prime

@pytest.mark.parametrize("number, expected", [
    (2, True),
    (3, True),
    (4, False),
    (5, True),
    (16, False),
    (17, True),
])
def test_is_prime(number, expected):
    assert is_prime(number) == expected