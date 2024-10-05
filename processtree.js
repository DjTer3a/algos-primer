const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

function printTree(nodes, depth = 0) {
  for (let node of nodes) {
    console.log("| ".repeat(depth), node.pid, node.ppid, node.comm);
    printTree(node.children, depth + 1);
  }
}

function Main() {
  let nodes = {};

  const rl = readline.createInterface({
    input,
    output,
    terminal: false,
  });

  let isFirstLine = true;

  //first run
  rl.on("line", (line) => {
    if (isFirstLine) {
      isFirstLine = false;
      return;
    }
    let parts = line.trim().split(/\s+/);
    let [pid, ppid, ...comm] = parts;
    comm = comm.join(" ");
    nodes[pid] = {
      pid,
      ppid,
      comm,
      children: [],
    };
  });

  //second run
  rl.on("close", () => {
    let root = [];
    for (let pid in nodes) {
      let node = nodes[pid];
      let parent = nodes[node.ppid];
      if (parent) {
        parent.children.push(node);
      } else {
        root.push(node);
      }
    }
    printTree(root);
  });
}

Main();
