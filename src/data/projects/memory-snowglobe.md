##  Description
Memory Snowglobe is an experimental moving-image art piece built from a neural network's hallucination of my digital media. Using a generative adversarial network trained entirely on my personal iPhone photo archive — tens of thousands of images spanning the past decade — I created a system that attempts to reconstruct and reinterpret what I’ve seen, who I’ve known, and how I’ve remembered.

<div class="project-video">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/aLWaj0a3uDI"
    title="Memory Snowglobe Process"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

## Motivation
The project began as an exercise to understand Refik Anadol’s *Unsupervised*, where he trained a GAN model on the entire MoMA collection, and visualized the resulting latent space in a massive realtime visualization responding to ambient temperature, noise, and other inputs in the viewing chamber. I wanted to try deconstructing the process of that piece to see what I could learn from him about ML, interactive media, and creative coding, while also trying to build a piece that felt meaningful to me. 

## Experience, Learning, and Skills
To this end, I selected my iPhone photo album (approximately 9500 images) to use for model training. I pruned the 'dataset' to make sure no screenshots, memes, or other unnatural photos were in the training set, picked out duplicates, and cleaned each image into a 512x512 input.

![snowglobe_1](snowglobe_1.jpg)

For the model, I dived through the literature on GANs to select the best one for the task, as the one Anadol used was quite old by that point. I learned that GANs are actually two models with competing purposes, falling into a Nash equilibrium: a *generator* model learns to distinguish images that “belong,” while a *discriminator* model attempts to generate images that fool it. I ended up settling on a [vision-aided GAN](https://github.com/nupurkmr9/vision-aided-gan), an architecture that leverages existing pre-trained models to improve the discriminator performance. With the setup complete, I trained the model for about a week on [Lambda Labs](https://lambda.ai/).

The outputs were unsurprisingly quite messy; because this included portraits, landscapes, pet photos, and basically anything I thought was interesting in the past decade, the diversity and variability of the input dataset was naturally quite high. Faces merged, landscapes folded, and objects appeared that never existed. The model created dreamlike hallucinations of faces I half remember, cities I've never lived in, and mountains I've never climbed. 

![snowglobe-2](snowglobe_2.png)

I then built a custom pipeline on Google Colab to have the final model generate a 'latent space walk'  with its trained weights. This started by taking two  sample images generated, and moving along its multidimenional axes of similarity to smoothly transition between one to the other. With a long list of these images, the transition allowed me to build an unnerving morphing visual along multiple images.

<video src="@snowglobe_vid.mp4" controls playsinline></video>

I then fed the output of this visual into a particle simulator with signed distance fields that I from scratch on vvvv, an audiovisual live-programming platform based on C# and similar to TouchDesigner. Tailoring this realtime simulation helped me unlock a dreamlike visualiation that looked quite different from *Unsupervised*; a foggy, undulating waveform that feels less like a memory and more like peering someone's head when they're dreaming.


#### Tech Stack
- Python
- vvvv
- C#
- CUDA, ML (StyleGAN3)

## Reflection

What started as reverse-engineering became something more uncanny and reflective. This project was an excellent crash course on using ML and live-programming for custom-built, data-intensive generative visuals. While I already had the requisite coding experience to build the project from scratch, I became more comfortable researching and using different classes of ML models, and gained an appreciation for node-based workflows like vvvv and TouchDesigner.

Overall, this project explores computational memory, self-surveillance, and the fragility of personal archives in the age of generative media. If I could expand it further, I would expand this work into a more immersive installation, using projection, sound, or viewer input to turn the piece into an interactive memory object. I’m also interested in layering generative text (trained on my own messages, notes, and journals) to introduce narrative or poetic fragments into the system.


