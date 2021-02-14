import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title:string,url:string){
        super(`<section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="video__title"></h3>
            </section>`)

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        console.log('url',url)
        iframe.src = this.convertToEmbeddedURL(url);   //url -> videoId

        const videoTitle = this.element.querySelector('.video__title')! as HTMLParagraphElement;
        videoTitle.textContent = title
    }

    //정규표현식
    private convertToEmbeddedURL(url:string):string{
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
        const match = url.match(regExp);
        console.log('match',match)
        const videoId = match? match[1] || match[2] : undefined;
        if(videoId){
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
