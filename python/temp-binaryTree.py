class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        
class BinaryTree:
    def __init__ (self, root_value):
        self.root = Node(root_value)
        
    def insert_left(self, current_node, value):
        if current_node.left is None:
            current_node.left = Node(value)
        else:
            new_node = Node(value)
            new_node.left = current_node.left
            current_node.left = new_node
    
    def insert_right(self, current_node, value):
        if current_node.right is None:
            current_node.right = Node(value)
        else:
            new_node = Node(value)
            new_node.right = current_node.right
            current_node.right = new_node
    
    def level_order_traversal(self):
        if not self.root:
            return []
        queue = [self.root]
        result = []
        while queue:
            current_node = queue.pop(0)
            result.append(current_node.value)
            if current_node.left:
                queue.append(current_node.left)
            if current_node.right:
                queue.append(current_node.right)

        return result

    def evaluate_expression_tree(string):
        NumberStack = []
        OperatorStack = []
        for char in string:
            if char.isdigit():
                NumberStack.append(int(char))
            elif char in ('+', '-', '*', '/'):
                if not OperatorStack:
                    OperatorStack.append(char)
                else:
                    while (OperatorStack and NumberStack):
                        right_operand = NumberStack.pop()
                        left_operand = NumberStack.pop()
                        operator = OperatorStack.pop()
                        if operator == '+':
                            NumberStack.append(left_operand + right_operand)
                        elif operator == '-':
                            NumberStack.append(left_operand - right_operand)
                        elif operator == '*':
                            NumberStack.append(left_operand * right_operand)
                        elif operator == '/':
                            NumberStack.append(left_operand / right_operand)  
            if len(NumberStack) == 1 and not OperatorStack:
                return NumberStack.pop()
        return None
    
def main():
    expression = "23+5*"
    result = BinaryTree.evaluate_expression_tree(expression)
    if result is not None:
        print("Result:", result)
    else:
        print("Invalid expression")
if __name__ == "__main__":
    main()
    tree = BinaryTree(1)
    tree.insert_left(tree.root, 2)
    tree.insert_right(tree.root, 3)
    print("Level Order Traversal:", tree.level_order_traversal())