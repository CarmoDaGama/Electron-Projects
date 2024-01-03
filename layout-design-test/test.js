const cmd = async (command) => {
    const util = require("node:util");
    const exec = util.promisify(require("node:child_process").exec);
    const { stdout, stderr } = await exec(command);   
    return {stderr, stdout};
};

async function getPrinterList(){  
    const { stdout, stderr } = await cmd("wmic printer list brief");
    if (stderr) {
        return;
    }
    var printers = [];
    
    let vt_stdout = stdout.split("  ");
    j = 0;
    vt_stdout = vt_stdout.filter((item) => item);
    for (i = 0; i < vt_stdout.length; i++) {
      if (vt_stdout[i] == " \r\r\n" || vt_stdout[i] == "\r\r\n") {
        printers[j] = vt_stdout[i + 1];
        j++;
      }
    }
    return printers;
}

getPrinterList();

