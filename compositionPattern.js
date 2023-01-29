// Composite Pattern
// allow creating of object with properties that are primitive values or collections of objects each item in collection can hold other collections themselves , creating deeply nested structure

// a tree structure is a good example of composite pattern , where each node can have a collection of child nodes , and each child node can have a collection of child nodes , and so on 

// common example of composite pattern is a file system , where each file or folder can have a collection of child files or folders , and each child file or folder can have a collection of child files or folders , and so on

class Folder {
    constructor(name) {
        this.name = name;
        this.files = [];
    }

    add(file) {
        this.files.push(file);
    }

    scan() {
        console.log(`scanning folder ${this.name}`);
        for (let file of this.files) {
            file.scan();
        }
    }
}

class File {
    constructor(name) {
        this.name = name;
    }

    scan() {
        console.log(`scanning file ${this.name}`);
    }
}

function test() {
    const music = new Folder('music');
    const file1 = new File('file1.mp3');
    const file2 = new File('file2.mp3');
    const file3 = new File('file3.mp3');
    const file4 = new File('file4.mp3');
    const file5 = new File('file5.mp3');
    const file6 = new File('file6.mp3');
    const file7 = new File('file7.mp3');

    music.add(file1);
    music.add(file2);
    music.add(file3);
    music.add(file4);
    music.add(file5);
    music.add(file6);
    music.add(file7);

    const images = new Folder('images');
    const file8 = new File('file8.jpg');
    const file9 = new File('file9.jpg');
    const file10 = new File('file10.jpg');

    images.add(file8);
    images.add(file9);
    images.add(file10);

    const root = new Folder('root');
    root.add(music);
    root.add(images);

    root.scan();

}
// gives a basic example of file system , where each folder can have a collection of files and folders , and each file or folder can have a collection of files and folders , and so on
// test();

// another example of composite pattern is a html document , where each html element can have a collection of child elements , and each child element can have a collection of child elements , and so on

class HtmlElement {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.elements = [];
    }

    toString(indent = 0) {
        let html = '';
        const i = ' '.repeat(indent * 2);
        html += `${i}<${this.name}>\n`;
        if (this.text.length > 0) {
            html += ' '.repeat(indent * 2 + 2) + this.text + '\n';
        }
        for (let element of this.elements) {
            html += element.toString(indent + 1);
        }
        html += `${i}</${this.name}>\n`;
        return html;
    }

    addElement(element) {
        this.elements.push(element);
    }

    removeElement(element) {
        this.elements = this.elements.filter(e => e !== element);
    }

    getElements() {
        return this.elements;
    }
}

class HtmlParentElement extends HtmlElement {
    constructor(name, text) {
        super(name, text);
    }

    toString() {
        return super.toString(0);
    }
}

class HtmlImageElement extends HtmlElement {
    constructor(src, width, height) {
        super('img', '');
        this.src = src;
        this.width = width;
        this.height = height;
    }

    toString() {
        return super.toString(0);
    }

    showProperties() {
        console.log(`src: ${this.src} , width: ${this.width} , height: ${this.height}`);
    }

}

function test2() {
    const elements = [];
    const parent = new HtmlParentElement('ul', '');
    parent.addElement(new HtmlElement('li', 'hello'));
    parent.addElement(new HtmlElement('li', 'world'));
    elements.push(parent);

    const child = new HtmlParentElement('ul', '');
    child.addElement(new HtmlElement('li', 'hello'));
    child.addElement(new HtmlElement('li', 'world'));
    parent.addElement(child);

    const image = new HtmlImageElement('http//www.google.com/hamza4600', 100, 100);
    // image.showProperties();
    parent.addElement(image);


    // as a json object
    // console.log(JSON.stringify(parent, null, 2));
    console.log(parent.toString());
}

test2();