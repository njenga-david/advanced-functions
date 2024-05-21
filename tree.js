function getAllDescendants(tree) {
    const descendants = []

    function traverse(node) {
        descendants.push(node.name);
        if (node.children) {
            node.children.forEach(traverse);
        }
    }

    traverse(tree);
    return descendants;
}


const theJonathans = {
    children: [
        {
            name: 'Elias'
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [
                        {
                            name: 'Lily'
                        }
                    ]
                },
                {
                    name: 'Zoe'
                },
                {
                    name: 'Theo'
                }
            ]
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

const allDescendants = getAllDescendants(theJonathans);
console.log(allDescendants); 