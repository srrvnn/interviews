/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    var courseOrder = [];

    // compute dependency list to get adjacent nodes easily

    var dependencyList = [];

    prerequisites.forEach(function(item) { // O(E)t O(V+E)s

        var source = item[1];
        var dest = item[0];

        dependencyList[source] = dependencyList[source] || [];
        dependencyList[source].push(dest);

    });

    // console.log('dependencyList computed.');
    // console.log(dependencyList.map(function(item, index) { return {'s': index, 'd': item}; }));

    // DFS until you find a node with no adjacent vertices

    var chosen = {};
    var runs1 = 0;

    while (courseOrder.length < numCourses) {

        // if (runs1 == 100) break;
        runs1++;

        // console.log('chosen already: ', courseOrder.length);

        var visited = {};
        var dfsStack = [];
        var unvisited = 0;

        var chosenThisDFS = false;

        while (dfsStack.length < 1) {

            if (chosen[unvisited]) {

                unvisited++;

            } else dfsStack.push(unvisited);
        }

        // console.log('dfs from: ', dfsStack[0]);

        var runs2 = 0;

        // if (courseOrder.length == 20) console.log('chosen: ', chosen);

        while (dfsStack.length > 0) {

            // if (runs2 == 100) break;
            runs2++;

            var currentNode = dfsStack.pop();
            if (visited[currentNode]) continue;

            // if (courseOrder.length == 20) console.log('visit: ', currentNode);

            visited[currentNode] = true;

            var adjacentVertices = dependencyList[currentNode];
            var adjacentUnchosenVertices = [];

            // console.log('vertices: ', adjacentVertices);

            if (adjacentVertices && adjacentVertices.length > 0) {

                for (var i = 0; i < adjacentVertices.length; i++) {

                    if (!chosen[adjacentVertices[i]]) adjacentUnchosenVertices.push(adjacentVertices[i]);
                }
            }

            // console.log('unchosen vertices: ', adjacentUnchosenVertices);

            if (adjacentUnchosenVertices.length < 1) {

                // console.log('choosing: ------>', currentNode);

                chosen[currentNode] = true;
                courseOrder.unshift(currentNode)
                chosenThisDFS = true;
                break;

            } else {

                dfsStack = dfsStack.concat(adjacentUnchosenVertices);
            }

            // console.log('dfsstack: ', dfsStack);
        }

        if (!chosenThisDFS) return [];
    }

    return courseOrder;
};

var r = findOrder(100,[[6,27],[83,9],[10,95],[48,67],[5,71],[18,72],[7,10],[92,4],[68,84],[6,41],[82,41],[18,54],[0,2],[1,2],[8,65],[47,85],[39,51],[13,78],[77,50],[70,56],[5,61],[26,56],[18,19],[35,49],[79,53],[40,22],[8,19],[60,56],[48,50],[20,70],[35,12],[99,85],[12,75],[2,36],[36,22],[21,15],[98,1],[34,94],[25,41],[65,17],[1,56],[43,96],[74,57],[19,62],[62,78],[50,86],[46,22],[10,13],[47,18],[20,66],[83,66],[51,47],[23,66],[87,42],[25,81],[60,81],[25,93],[35,89],[65,92],[87,39],[12,43],[75,73],[28,96],[47,55],[18,11],[29,58],[78,61],[62,75],[60,77],[13,46],[97,92],[4,64],[91,47],[58,66],[72,74],[28,17],[29,98],[53,66],[37,5],[38,12],[44,98],[24,31],[68,23],[86,52],[79,49],[32,25],[90,18],[16,57],[60,74],[81,73],[26,10],[54,26],[57,58],[46,47],[66,54],[52,25],[62,91],[6,72],[81,72],[50,35],[59,87],[21,3],[4,92],[70,12],[48,4],[9,23],[52,55],[43,59],[49,26],[25,90],[52,0],[55,8],[7,23],[97,41],[0,40],[69,47],[73,68],[10,6],[47,9],[64,24],[95,93],[79,66],[77,21],[80,69],[85,5],[24,48],[74,31],[80,76],[81,27],[71,94],[47,82],[3,24],[66,61],[52,13],[18,38],[1,35],[32,78],[7,58],[26,58],[64,47],[60,6],[62,5],[5,22],[60,54],[49,40],[11,56],[19,85],[65,58],[88,44],[86,58]]);

console.log(r);