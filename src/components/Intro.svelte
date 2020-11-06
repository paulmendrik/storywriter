<script>
    import PrismicDOM from 'prismic-dom';

    export let intro
</script>

<div class="uk-height-viewport uk-background-cover uk-light uk-flex" style="background-image: url('{intro.data.image.url}');">
<div class="intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
<h1 class="quote uk-heading-primary animate uk-invisible">{PrismicDOM.RichText.asText(intro.data.quote)}</h1>
<p class="author">{PrismicDOM.RichText.asText(intro.data.author)}</p>
</div>
</div>

<section class="uk-section">
<div class="uk-container uk-container-small">
<div class="uk-child-width-expand uk-grid-small uk-text-center " uk-grid>
<div class="heading">
<h1>Presenting</h1>
<p>Stories about life in rural France as told by Lynne Turner</p>
</div>
</div>
</div>
</section>

<style>


h1.quote {
    font-family: plantin, sans-serif;
    font-weight: 300;
    font-size: clamp(2rem, 3.25vw, 4rem);
    font-style: italic;
    color: white;
}

p.author {
    font-family: eskapade, serif;
    font-weight: 600;
    font-size: clamp(1.5rem, 3.25vw, 2.75rem);
    color: white;
}

.heading h1 {
    font-family: eskapade, serif;
    font-weight: 500;
    font-size: clamp(3rem, 10vw, 6rem) !important;
    line-height: 1;
    text-transform: uppercase;
    color: #121212;
    text-align: center;
}

.heading p {
    padding: 0;
    margin-top: 0;
    font-family: plantin, sans-serif;
    font-weight: normal;
    font-size: clamp(0.8rem, 10vw, 2rem);
    line-height: 1;
    text-transform: none;
    text-align: center;
}


@media (max-width: 414px) {
    .intro {width: 80%;}
    .uk-section { padding-bottom: 1rem !important; };
}

@media (max-width: 375px) {
    .intro {width: 80%;}
    .uk-section { padding-bottom: 1rem !important; };
}

@media (max-width: 320px) {
    .intro {width: 80%;}
    .uk-section { padding-bottom: 1rem !important; };
}

</style>