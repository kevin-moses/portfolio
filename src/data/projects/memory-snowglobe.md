##  Description
Memory Snowglobe is an experimental moving-image piece built from a neural network's hallucination of my life. Using a generative adversarial network trained entirely on my personal iPhone photo archive — tens of thousands of images spanning the past decade — I created a system that attempts to reconstruct and reinterpret what I’ve seen, who I’ve known, and how I’ve remembered.

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

## Motivation and Process
The project began as an exercise to understand Refik Anadol’s *Unsupervised*, where he trained StyleGAN2 on the MoMA collection and visualized the resulting latent space. I used a similar model architecture; in a GAN, one model  learns to distinguish images that “belong,” while another model attempts to generate images that fool it. Instead of using a large external repository to train the model, I turned inward and used my own life: mundane, random, often emotionally charged photos taken casually, haphazardly over time.

What emerged was unnerving, bizarre, and funny. Faces merged, landscapes folded, and objects appeared that never existed. The model created dreamlike hallucinations of faces I half remember, cities I've never lived in, and mountains I've never climbed. Using vvvv, I rendered these into a continuous latent space interpolation, where one “dream” disintegrates to the next through the high dimensional feature set the model identified. I then fed that into a real-time visual environment using signed distance fields — creating a foggy, undulating waveform that feels less like a memory and more like peering inside one.

### Tech Stack
- Python
- vvvv
- C#
- CUDA, ML (StyleGAN3)

## Reflection

This project explores computational memory, self-surveillance, and the fragility of personal archives in the age of generative media. If I could expand it further, I would expand this work into a more immersive installation, using projection, sound, or viewer input to turn the piece into an interactive memory object. I’m also interested in layering generative text (trained on my own messages, notes, and journals) to introduce narrative or poetic fragments into the system.

What started as reverse-engineering became something more uncanny and reflective. 
