// Command pattern
// is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

// used in application where we need to issue requests to objects without knowing anything about the operation being requested or the receiver of the request

// example of command pattern is a game where we have a number of objects that can handle a request , such as a player , a weapon , and an enemy , and each object can decide whether to process the request or to pass it to the next object in the chain , such as a player can decide whether to process the request or to pass it to the weapon , and the weapon can decide whether to process the request or to pass it to the enemy

// text editor with copy cut paste undo redo
// we 

class Command {
    constructor(app, editor, command, value) {
        this.app = app;
        this.editor = editor;
        this.command = command;
        this.value = value;
    }

    saveBackup() {
        this.app.backup = this.editor.text;
    }

    execute() {
        this[this.command](this.value);
    }

    undo() {
        this.editor.text = this.app.backup;
    }
}

class CopyCommand extends Command {
    copy() {
        this.saveBackup();
        this.app.clipboard = this.editor.text;
    }
}

class CutCommand extends Command {
    cut() {
        this.saveBackup();
        this.app.clipboard = this.editor.text;
        this.editor.text = '';
    }
}

class PasteCommand extends Command {
    paste() {
        this.saveBackup();
        this.editor.text = this.app.clipboard;
    }
}

class UndoCommand extends Command {
    undo() {
        this.saveBackup();
        this.editor.text = this.app.backup;
    }
}

class RedoCommand extends Command {
    redo() {
        this.saveBackup();
        this.editor.text = this.app.backup;
    }
}

class Editor {
    constructor() {
        this.text = '';
    }
}

class App {
    constructor() {
        this.editor = new Editor();
        this.clipboard = '';
        this.backup = '';
    }

    execute(command) {
        const commandClass = `${command[0].toUpperCase()}${command.slice(1)} Command`;
        console.log(commandClass);
    }


}

const app = new App();

app.execute('copy');
app.execute('paste');
app.execute('cut');
app.execute('undo');
app.execute('redo');
