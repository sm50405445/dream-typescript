import { Component } from './components/component';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from "./components/page/page.js";

class App {
    private readonly page:Component & Composable;
    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title','https://picsum.photos/600/300');
        this.page.addChild(image)
        // image.attachTo(appRoot,'beforeend');

        const note = new NoteComponent('Note Title','Note Body')
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title','Todo check')
        this.page.addChild(todo);

        const video = new VideoComponent('Video Title','https://youtu.be/Z0U4Par7lEg')
        this.page.addChild(video);
    }
}

new App(document.querySelector('.document')! as HTMLElement)