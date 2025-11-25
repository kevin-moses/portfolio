
*[Publication in Journal of Physical Chemistry B](https://pubs.acs.org/doi/10.1021/acs.jpcb.2c06641)*

![pp-1](pp_1.png)

## Overview


This project revealed a critical, non-intuitive mechanism for helping design smart materials used in drug delivery and biotechnology. Using replica-exchange molecular dynamics simulations, we found that a polymer’s ability to stabilize a protein is not a general property but a highly specific interaction, and developed an Ising-like model to explain the interaction.

Specifically, we demonstrated that the same polymer (poly-lysine) could significantly stabilize one model protein while actively destabilizing a very similar one. This finding challenges common assumptions and provides a new, more precise design rule for engineers creating polymer-based therapeutics. This project culminated Senior Capstone in Chemical Engineering and a subsequent paper was published in the Journal of Physical Chemistry B, a leading scientific journal in the field. 

![pp-2](pp_2.png)

## Motivation

Proteins are the used throughout modern biotechnology, acting as pharmaceutical drugs, biocatalysts, and the building blocks for tissue engineering. Because their stable folding structure can break from temperature or pH changes, a potential engineering solution is to protect them by "wrapping" them in charged polymers. This assembly process could be used for delivering drugs to target cells, protecting them in harsh environments, or immobilizing them on surfaces.

This creates a critical design challenge: how does the polymer "wrapper" actually affect the protein's structure and function? The industry currently faces a 'hit-or-miss' problem. While stabilization is the goal, some studies show polymers have no effect or, even worse, actively destabilize the protein. Despite its importance, our fundamental understanding of these interactions is extremely limited, making biomaterial design an expensive, trial-and-error process.

Our project was motivated by the need to move beyond this guesswork and establish clear design rules. We aimed to uncover potential mechanisms for the interaction. To do this, we used high-fidelity computer simulations to investigate the influence of two common biocompatible polymers (lysine and chitosan) on the stability of two well-studied "test" peptides (GB1 and TZ4). By modeling these systems at the atomic level, our goal was to build a predictive understanding that could help engineers design more effective and reliable biomaterials from the ground up.

![pp-3](pp_3.png)

## Technical Overview

My primary role was to execute the complete computational experiment. This involved building an "all-atom" simulation of each peptide-polymer system within the GROMACS simulation package. I was responsible for the entire protocol: meticulously constructing the initial systems (placing the peptide, polymer, and water molecules), performing energy minimization and equilibration steps to create a stable, realistic starting point, and then running the large-scale Replica Exchange Molecular Dynamics (REMD) simulations. This advanced method was essential for overcoming energy barriers and allowed us to observe the peptide folding and unfolding—a process that would be impossible to capture with standard simulation—across a full range of temperatures (273-473 K).

![pp-4](pp_4.png)

A critical learning experience was the necessity of model validation. Before I could trust any new findings, I had to prove my computational representation of the molecules were accurate. I did this by running a simulation of the GB1 peptide by itself and comparing my results directly to published, real-world experimental (NMR and fluorescence) data. My simulation's folding curve was a strong match for the experimental data, which validated our model and gave us the confidence to proceed. This process taught me to ground all computational work in physical reality and demonstrated my ability to use analytical methods like DSSP to quantify and compare complex structural data.

*Hard skills*: Shell scripting, Python workflows, computational biochemistry, statistical analysis

## Reflection

The most significant challenge arose directly from my simulation data, which yielded a counter-intuitive and, ultimately, foundational result: the paradoxical behavior of lysine. My analysis of the free energy profiles (Fig. 6) and folding fractions (Fig. 5) clearly showed that lysine stabilized the hydrophobically-zippered TZ4 peptide but actively destabilized the more marginal GB1 peptide. This result, which ran contrary to simple assumptions, became the central phenomenon we had to explain.

My role was to execute the complex replica-exchange simulations and perform the structural data analysis. I then worked with my PI, who proposed the Ising-like model as a theoretical framework to dissect the underlying mechanism. This collaboration was a practical lesson in linking computational experiment with statistical mechanics. By fitting my simulation data to the model, we could finally quantify the competing mechanisms.

This finding, which aligns with experimental literature on polymer hydrophobicity, has direct implications for biomaterial design. If I were to continue this work, I would follow the future avenue we proposed: systematically simulating polymers with controlled, varying degrees of hydrophobicity. This would allow us to move from observing a phenomenon to creating a predictive model design for stabilizing materials.