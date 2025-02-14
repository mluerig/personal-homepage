---
layout: page
permalink: /research/
# title: research
---

<div class="gallery-grid">

  <div class="image-thumb" style="max-width:30%">
    <a data-src="/assets/images/photos/ml-07.jpg"
       data-lightbox="gallery">
      <img>
    </a>
    <div class="caption"></div> 
  </div>

  <div class="image-thumb" style="max-width:30%">
    <a data-src="/assets/images/photos/ml-08.jpg"
       data-lightbox="gallery">
      <img>
    </a>
    <div class="caption"></div>
  </div>

</div>


# research goals

My main research objective is to understand the origin and maintenance of phenotypic diversity across different levels of biological organization (i.e., within and among species). Specifically, I aim to develop a more quantitative understanding of **(i) phenotypic differentiation among major lineages**, **(ii) the origin and persistence of color polymorphisms**, and **(iii) phenotype-environment relationships in natural populations**. To achieve these goals, I develop methodological frameworks for high-throughput phenotyping, primarily using automated image analysis (computer vision) and artificial intelligence (e.g., image encoders, vision-language models, large language models). I have applied these methods across a range of biological systems (e.g., insects, crustaceans, plants) using field surveys and laboratory studies, as well as natural history collections.

# ongoing work

<details open>
<summary>Phenomics of color evolution in butterflies</summary>
<div class="details-content">
Butterfly wings provide an ideal system to study the origins of phenotypic diversity and evolutionary diversification, particularly using computer vision and AI: most phenotypic variation is along two dimensions, and therfore well suited for image-based analysis. Moreover, their modular wing patterns give rise to astonishing combinatorial complexity that is challenging to capture manually, but efficiently handled by vision encoders. Additionally, their extensive representation in natural history collections and their iconic status make them a powerful model for integrating computer vision and evolutionary biology. Using large image databases from natural history museum collections, and cutting edge foundational AI, I am empirically testing theories on the adaptive significance of wing color patterns—such as aposematism, camouflage, and mating displays. 
</div>
<br>
<div class="gallery-grid">
  <div class="image-thumb" >
		<a data-src="/assets/images/figures/butterflies01.jpg"
		data-lightbox="isopods"
		data-title="Natural history museum collections are a treasure trove for phenotypic data.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/butterflies02.jpg"
		data-lightbox="isopods"
		data-title="Foundational AI can convert phenotypic information to generic features.">
		<img>
		</a>
		<div class="caption"></div>
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/butterflies03.jpg"
		data-lightbox="isopods"
		data-title="Feature spaces are explored with tangible traits related to coloration and patterning.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>
</div>
</details>

<details open>
<summary>Mapping out the adaptive landscape of colour polymorphisms</summary>
  <div class="details-content">
Color polymorphisms are an important source of intra-specific phenotypic diversity, but the ecological and evolutionary implications of discrete vs. continuous varation within and among morphs is still poorly understood. While often rooted in discrete genetic mechanisms, the resulting phenotypic variation can be continuous, and different morphs are often overlapping along multiple phenotypic dimensions in phenotypic space. Indeed, color polymorphisms are frequently associated with variation in other traits, such as morphology and behavior. By leveraging long term image datasets and AI-based computer vision, I explore the complex phenotypic landscapes of color polymorphisms, uncovering how continuous and discrete variation interact with fitness, selection, and evolutionary trajectories.
</div>
<br>

<div class="gallery-grid">
  <div class="image-thumb" >
		<a data-src="/assets/images/figures/odonates01.jpg"
		data-lightbox="isopods"
		data-title="Color polymorphism in Ischnura elegans is female limited: 3 female color morphs vs 1 male morph.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/odonates02.jpg"
		data-lightbox="isopods"
		data-title="With computer vision we can extract aspects of shape and coloration in high throughput.">
		<img>
		</a>
		<div class="caption"></div>
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/odonates03.jpg"
		data-lightbox="isopods"
		data-title="By phenotypic and mating information we can detect female phenotypes that are preferred by males.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>
</div>

</details>

<details open>
<summary>The phenomicist's toolkit: developing of modern tools for phenotyping</summary>
<div class="details-content">

At large, one of the objectives of my research program is to strengthen to role of phenotypic information in ecological and evolutionary resarch. To enable phenomics-centered research I develop high-throughput phenotyping methods that leverage computer vision to extract rich, high-dimensional phenotypic data from images. These pipelines focus on unserfriendliness to enable efficient and reproducible trait quantification across diverse biological systems (phenopype), and provide access to state-of-the-art AI techniques, e.g., for deep metric learning (BioEncoder). By building and applying these tools, I aim to overcome bottlenecks in phenomic data collection and make large-scale phenotypic data acquisition accessible to users from the domain of biology, ecology and evolution, with little to no computational background.

</div>
<br>

<div class="gallery-grid">
  <div class="image-thumb" >
		<a data-src="/assets/images/figures/phenomics01.jpg"
		data-lightbox="isopods"
		data-title="phenopype: A phenotypic pipeline for Python">
		<img>
		</a>
		<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/phenomics02.jpg"
		data-lightbox="isopods"
		data-title="BioEncoder: A metric learning toolkit for comparative organismal biology">
		<img>
		</a>
		<div class="caption"></div>
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/phenomics03.jpg"
		data-lightbox="isopods"
		data-title="Review on the use of computer vision for phenomics in ecology and evolutionary biology">
		<img>
		</a>
		<div class="caption"></div> 
  </div>
</div>

<ul>
  <li>
  <b>Lürig, M.D.</b>, Di Martino, E. and Porto, A. (2024) ‘BioEncoder: A metric learning toolkit for comparative organismal biology’, Ecology letters, 27(8), p. e14495. <img src="/assets/images/open_access_logo.png" style="height: 1.2em; padding: 3px; margin-top: -2px"> 
  <a id="link" href="https://doi.org/10.1111/ele.14495" target="_blank"> [DOI]</a>
  </li>
  <li>
  <b>Lürig, M.D.</b> (2022). phenopype: A phenotyping pipeline for Python. Methods in Ecology and Evolution, 13(3), 569–576. 
  <img src="/assets/images/open_access_logo.png" style="height: 1.2em; padding: 3px; margin-top: -2px"> 
  <a id="link" href="https://doi.org/10.1111/2041-210x.13771" target="_blank"> [DOI]</a>
  <a id="link" href="{{ site.data.links.gh_assets_files }}/papers/Lürig 2022 - phenopype - A phenotyping pipeline for Python.pdf"> [PDF]</a>
  </li>
  <li>
    <b>Lürig, M.D.</b>, Donoughe, S., Svensson, E.I., Porto, A., and Tsuboi, M. (2021). Computer Vision, Machine Learning, and the Promise of Phenomics in Ecology and Evolutionary Biology. Frontiers in Ecology and Evolution 9:642774. 
  <img src="/assets/images/open_access_logo.png" style="height: 1.2em; padding: 3px; margin-top: -2px"> 
  <a id="link" href="https://doi.org/10.3389/fevo.2021.642774" >[DOI]</a>
  <a id="link" href="{{ site.data.links.gh_assets_files }}/papers/Lürig et al. 2021 - Computer Vision, Machine Learning, and the Promise of Phenomics in Ecology and Evolutionary Biology.pdf" > [PDF]</a>	
  </li>
</ul>

</details>


# previous work

<details>
<summary>The adaptive landscape of pigmentation and nutrition in freshwater isopods</summary>
  <div class="details-content">

	The pigmentation of the freshwater isopod <i>Asellus aquaticus</i> is thought to be shaped visual predation along a gradient of background darkness. In a mesocosm experiment where me manipulated background darkness and predation pressure, we found that fish predation reduced isopod density, but pigmentation was primarily influenced by macrophyte presence, suggesting an environmental rather than predator-driven effect. A subsequent laboratory experiment revealed that pigmentation responds to dietary protein levels, with higher protein intake accelerating pigmentation development but increasing juvenile mortality under rapid growth. These findings indicate that dietary-driven plasticity can shape phenotypic variation and survival outcomes, even in the absence of predators. Together, these results highlight the complex interplay between genetic background, environmental conditions, and life-history traits in shaping isopod pigmentation.<br>

  <i>Asellus aquaticus</i> is becoming a versatile study system to investigate long-standing questions at the interface of ecology, evolution, and development. Findings from this and other work on the relevance of isopod pigmentation and development are summarized in a review article on <i>A. aquaticus</i> (Lafuente et al. 2021). 

</div>
<br>

<div class="gallery-grid">
  <div class="image-thumb" >
		<a data-src="/assets/images/figures/asellus01.jpg"
		data-lightbox="isopods"
		data-title="Variation in habitat background darkness in Lake Lucerne at Eawag Kastanienbaum ">
		<img>
		</a>
		<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/asellus02.jpg"
		data-lightbox="isopods"
		data-title="Variation in pigmentation in freshwater isopods is thought to be an adaptive response to predation along a gradient of background darkness.">
		<img>
		</a>
		<div class="caption"></div>
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/asellus03.jpg"
		data-lightbox="isopods"
		data-title="Mesocosm experiment to manipulate background darkness and predation pressure.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/asellus04.jpg"
		data-lightbox="isopods"
		data-title="Imaging setup for computer-vision-based quantification of pigmentation in isopods">
		<img>
		</a>
    	<div class="caption"></div> 
  </div>

  <div class="image-thumb" >
		<a data-src="/assets/images/figures/asellus05.jpg"
		data-lightbox="isopods"
		data-title="Development of pigmentation between high protein (top) and low protein (bottom) supplement during ontogeny.">
		<img>
		</a>
		<div class="caption"></div> 
  </div>
</div>

<br>
<ul>
  <li>
	<b>Lürig, M.D.</b>, Narwani, A., Penson, H., Wehrli, B., Spaak, P., and Matthews, B. (2021). Non-additive effects of foundation species determine the response of aquatic ecosystems to nutrient perturbation. Ecology 102(7), e03371. 
	<a id="link" href="https://doi.org/10.1002/ecy.3371" >[DOI]</a>
	<a id="link" href="Lürig et al. 2021 - Ecology_accepted.pdf" > [PDF]</a>
  </li>
  <li>
	<b>Lürig, M.D.</b>, Best, R.J., Dakos, V., and Matthews, B. (2020). Submerged macrophytes affect the temporal variability of aquatic ecosystems. Freshwater Biology 66(3), 421-435.
	<a id="link" href="https://doi.org/10.1111/fwb.13648" >[DOI]</a>
	<a id="link" href="{{ site.data.links.gh_assets_files }}/papers/Lürig et al. 2021 - FWB_accepted.pdf" > [PDF]</a>	
  </li>
  <li>
	Lafuente, E., <b>Lürig, M.D.</b>, Rövekamp, M., Matthews, B., Buser, C., Vorburger, C., & Räsänen, K. (2021). Building on 150 Years of Knowledge: The Freshwater Isopod Asellus aquaticus as an Integrative Eco-Evolutionary Model System. Frontiers in Ecology and Evolution, 9. 
  <img src="/assets/images/open_access_logo.png" style="height: 1.2em; padding: 3px; margin-top: -2px"> 
  <a id="link" href="http://dx.doi.org/10.3389/fevo.2021.748212" target="_blank"> [DOI]</a>
  <a id="link" href="{{ site.data.links.gh_assets_files }}/papers/Lafuente et al. 2021 - Building on 150 Years of Knowledge - The Freshwat ... pod Asellus aquaticus as an Integrative Eco-Evolutionary Model System.pdf" > [PDF]</a>
  </li>
</ul>
</details>

<details>
<summary>Foundation Species and the Stability of Aquatic Ecosystems</summary>
  <div class="details-content">
	Foundation species shape ecosystem structure and function, but their effects can vary across timescales and in response to environmental change. Using a series of outdoor mesocosm experiments and high-frequency multi-parameter sensor technology we found that macrophytes reduce phytoplankton biomass, increase DOM accumulation, and influence ecosystem variability over time. However, when co-occurring with mussels, their effects on nutrient dynamics became less predictable, leading to a counterintuitive increase in phytoplankton biomass. These results show that while foundation species can stabilize ecosystems, their interactions may generate unexpected nonlinear responses to environmental perturbations.
  </div>
<br>
<div class="gallery-grid">
  <div class="image-thumb" >
    <a data-src="/assets/images/figures/sondes01.jpg"
       data-lightbox="gallery"
	     data-title="High frequency multi-parameter sondes (WTW/YSI) during calibration.">
      <img>
    </a>
    <div class="caption"></div> 
  </div>
  <div class="image-thumb" >
    <a data-src="/assets/images/figures/ponds01.jpg"
       data-lightbox="gallery"
	     data-title="Outdoor experimental pond ecosystems (20x 15000L) at Eawag Dübendorf.">
      <img>
    </a>
    <div class="caption"></div>
  </div>
</div>
<br>
<ul>
  <li>
	<b>Lürig, M.D.</b>, Narwani, A., Penson, H., Wehrli, B., Spaak, P., and Matthews, B. (2021). Non-additive effects of foundation species determine the response of aquatic ecosystems to nutrient perturbation. Ecology 102(7), e03371. 
	<a id="link" href="https://doi.org/10.1002/ecy.3371" >[DOI]</a>
	<a id="link" href="Lürig et al. 2021 - Ecology_accepted.pdf" > [PDF]</a>
  </li>
  <li>
	<b>Lürig, M.D.</b>, Best, R.J., Dakos, V., and Matthews, B. (2020). Submerged macrophytes affect the temporal variability of aquatic ecosystems. Freshwater Biology 66(3), 421-435.
	<a id="link" href="https://doi.org/10.1111/fwb.13648" >[DOI]</a>
	<a id="link" href="{{ site.data.links.gh_assets_files }}/papers/Lürig et al. 2021 - FWB_accepted.pdf" > [PDF]</a>	
  </li>
</ul>
</details>




