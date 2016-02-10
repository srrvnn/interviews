var inorderList = [];

function inorder(node) {

	// exit condition

	if (node == null) return;

	// go along the left tree

	inorder(left);

	// print node

	inorderList.push(node.val);

	// go along the right tree

	inorder(right);
}

inorder(root);