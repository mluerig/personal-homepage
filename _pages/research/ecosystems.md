---
layout: page
permalink: /research/ecosystems
---
# Foundation species and the stability of aquatic ecosystems

Submerged macrophytes are important foundation species that can strongly influence the structure and functioning of aquatic ecosystems, but only little is known about the temporal variation and the timescales of these effects (i.e. from hourly, daily, to monthly). We conducted an outdoor experiment in replicated mesocosms (1000 L) where we manipulated the presence and absence of macrophytes to investigate the their ecosystem effects across different times scales. We measured several parameters (chlorophyll A, phycocyanin, dissolved organic matter [DOM], and oxygen) with high-resolution sensors (15 min intervals) over several months (94 days from spring to fall), and estimated metabolic rates of each replicate ecosystem in a Bayesian framework (Appling et al. 2018). 

<div class="res-center">
<div class="res-container">
<img class="res-img" src="/assets/images/figures/sondes_1.png">
<div class="res-caption">
Figure 1 - Mesocosm setup, with eight tanks and four high frequency multi-parameter sondes (WTW/YSI). Because we were limited to four sondes, we could only measure two tank pairs of macrophyte (M+)/no macrophyte (M‒) contrasts. To measure all eight tanks, we followed a rotation scheme in which every tank was measured for 10 consecutive days before the sondes were moved to another tank (for details refer to Methods section).
</div>
</div>
</div>

Over the entire experiment, macrophytes had a negative effect on phytoplankton biomass, a positive effect on mean DOM concentration, and either a weak or no effect on mean metabolic rates, DOM composition, and conductivity (Lürig et al. 2021). We also found that macrophytes increased the variance of DOC composition and metabolic rates, and, at some times of the year, increased the variance of phytoplankton biomass and conductivity. Overall, our high-resolution time series embedded within a manipulative experiment reveal how a foundation species can affect ecosystem properties and processes that have characteristically different timescales of response to environmental variation. Specifically, our results show how macrophytes can affect short-term dynamics of algal biomass, while also affecting the seasonal buildup of DOM and the variance of ecosystem metabolism.

<div class="res-center">
<div class="res-container">
<img class="res-img" src="/assets/images/figures/sondes_2.png">
<div class="res-caption">
Figure 2 - Left: High frequency measurements of chlorophyll-a and Phycocyanin over time: macrophytes increased the mean, but decreased the variance of phytoplankton biomass - a surprising result. Right: Average log response ratios (LRR) for macrophyte presence on mean and CV. Effect sizes were calculated differently for each data type: high frequency (●), metabolism (▲), or DOC point measurements (■) – for details refer to the methods section of our paper.
</div>
</div>
</div>

Aquatic ecosystems worldwide are also strongly affected by an increasing frequency of external perturbations, like extreme climate events, invasive species, or altered nutrient dynamics. Foundation species, namely those that play a central role in the structuring of communities and functioning of ecosystems, are likely important for the resilience of aquatic ecosystems in the face of disturbance (Narwani et al. 2019). However, little is known about how interactions among such species influence ecosystem responses to nutrient perturbation. 

<div class="res-center">
<div class="res-container">
<img class="res-img" src="/assets/images/figures/sondes_3.png">
<div class="res-caption">
Figure 3 - 
</div>
</div>
</div>

Using an array (N=20) of outdoor experimental pond ecosystems (15000L, Fig. 3), we manipulated the presence of two foundation species, the macrophyte Myriophyllum spicatum and the mussel Dreissena polymorpha, and quantified ecosystem responses to multiple nutrient disturbances. We manipulated presence and absence of each foundation species in a factorial design (16 ponds total: n = 4 per treatment level). We used the same high frequency sensor technology as in Lürig et al. (2021; EXO2 sondes), execept this time we had a full set of 20 sondes at our disposal: in four additional ponds we traced ecosystem of un-manipulated ponds without foundation species (oligotrophic control). 

<div class="res-center">
<div class="res-container" >
<img class="res-img" src="/assets/images/figures/sondes_4.png">
<div class="res-caption">
Figure 4 - Effect of foundation species on the mean of ecosystem parameters before, during and after nutrient perturbations. The lines indicate the respective average of all four ponds per treatment per hour (mean ± SE), the gray shading indicates the disturbance phases, and the coloured bars underneath the time series indicate whether a treatment was significantly different from the control (one linear model per hour: (orange=Dreissena main effect [D treatment], green=Myriophyllum main effect [M treatment], purple=interactive effect [MD treatment]). The data stem from a seven day long sliding window (168 data points). The black line indicates the predicted additive response based on the sum of the separate macrophyte or mussels treatment with the control subtracted (e.g. (Macrophyte Chl + Dreissena Chl) - Control Chl = predicted additive response). 
</div>
</div>
</div>

Overall, both foundation species strongly affected the ecosystem responses to nutrient perturbation, and, as expected, initially suppressed the increase in phytoplankton abundance following nutrient additions (Lürig et al. 2021). Surprisingly, however, when both species were present, phytoplankton biomass increased substantially relative to other treatment combinations, illustrating a non-additive antagonistic effect in response to nutrient perturbation. These results demonstrate how interactions between foundation species can cause surprisingly strong deviations from the expected responses of aquatic ecosystems to nutrient additions. 

<div class="pointer">
<p>:point_right:</p>
<p style="max-width:80%">
In summary, we found that macrophytes are of outstanding importance in determining the functioning and stability of aquatic ecosystems. However, these effects are not necessarily easiliy predictable when macrophates are interacting with other ecosystem engineers, which can lead to surpring dynamics. 
</p>
<p>:point_left:</p>
</div>

The times series data collected in this project led to two additional outcomes: as "domain expert" for time series of aquatic ecosystems, I labelled all anomalies I could find in the time series. These labels were then used to train a deep learning based anomaly detector (Russo et al. 2020), and also served as basis for discussion of the value of data annotation for machine learning based anomaly detection in environmental systems (Russo et al. 2021).

## References 

Appling, A. P., Hall, R. O., Jr, Yackulic, C. B., & Arroita, M. (2018). Overcoming equifinality: Leveraging long time series for stream metabolism estimation. Journal of Geophysical Research. Biogeosciences, 123(2), 624–645. 

<u><strong>Lürig, M. D.</strong></u>, Best, R. J., Dakos, V., & Matthews, B. (2021). Submerged macrophytes affect the temporal variability of aquatic ecosystems. Freshwater Biology, 66(3), 421–435. 

<u><strong>Lürig, M. D.</strong></u>, Narwani, A., Penson, H., Wehrli, B., Spaak, P., & Matthews, B. (2021). Non-additive effects of foundation species determine the response of aquatic ecosystems to nutrient perturbation. Ecology, 102(7), e03371.

Narwani, A., Reyes, M., Pereira, A. L., Penson, H., Dennis, S. R., Derrer, S., Spaak, P., & Matthews, B. (2019). Interactive effects of foundation species on ecosystem functioning and stability in response to disturbance. Proceedings. Biological Sciences / The Royal Society, 286(1913), 20191857.

Russo, S., <u><strong>Lürig, M. D.</strong></u>, Hao, W., Matthews, B., & Villez, K. (2020). Active learning for anomaly detection in environmental data. Environmental Modelling & Software, 134, 104869

Russo, S., Besmer, M. D., Blumensaat, F., Bouffard, D., Disch, A., Hammes, F., Hess, A., <u><strong>Lürig, M. D.</strong></u>, Matthews, B., Minaudo, C., Morgenroth, E., Tran-Khac, V., & Villez, K. (2021). The value of human data annotation for machine learning based anomaly detection in environmental systems. Water Research, 117695, 117695. 