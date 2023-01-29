// Templete Pattern 
// allow to create a template that can be used to create a set of instructions
// provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps

// Real world example is of Data mining app that analyze data from differnt file formats and send important data to data pool  
// alot of stepa will be same for all file formats , but some steps will be different for each file format , so we can use the template pattern to create a template that can be used to create a set of instructions
 
// remove dead code and reuse code 
// sendData and analyzeData are the same for all file formats , so we can remove them from the file format classes and move them to the template class , and we can use the template pattern to create a template that can be used to create a set of instructions

class DataMiner {
    constructor() {
        this.fileFormat = null;
    }

    setFileFormat(fileFormat) {
        this.fileFormat = fileFormat;
    }

    analyzeData() {
        this.fileFormat.analyzeData();
    }

    sendData() {
        this.fileFormat.sendData();
    }
}

class FileFormat {
    analyzeData() {
        throw new Error('Method not implemented.');
    }

    sendData() {
        throw new Error('Method not implemented.');
    }
}

class CSVFileFormat extends FileFormat {
    analyzeData() {
        console.log('Analyze CSV Data');
    }

    sendData() {
        console.log('Send CSV Data');
    }
}

class JSONFileFormat extends FileFormat {
    analyzeData() {
        console.log('Analyze JSON Data');
    }

    sendData() {
        console.log('Send JSON Data');
    }
}

function test() {
    const dataMiner = new DataMiner();
    dataMiner.setFileFormat(new CSVFileFormat());
    dataMiner.analyzeData();
    dataMiner.sendData();
    dataMiner.setFileFormat(new JSONFileFormat());
    dataMiner.analyzeData();
    dataMiner.sendData();
}

test();