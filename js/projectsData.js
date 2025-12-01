export const projectsData = [
  {
    id: "slr",
    title: "Study on The Risk of Rising Sea Levels as a Result of Climate Change in Bekasi and Karawang Regencies",
    desc: "Undergraduate thesis project assessing coastal risk, hazard, and vulnerability.",
    year: 2023,
    tools: "ArcMap, Python, Statistical Analysis",
    info: "Undergraduate thesis project assessing coastal vulnerability.",
    content: [

      {
        type: "section-title",
        text: "Coastal Inundation Modelling"
      },

      {
        type: "image-right",
        src: "/images/slr-1.png",
        html: `
          <p>
            This study examines how long-term sea-level rise may reshape the coastal landscape of 
            Bekasi and Karawang Regencies. The hazard assessment begins with a bathtub inundation model, 
            where projected sea-level values are subtracted from the regional digital elevation model (DEM). 
            Areas where water levels exceed land elevation are identified as inundated zones.
          </p>
          <p>
            The resulting flood surface is classified into depth intervals to show both the severity and 
            the spatial extent of projected inundation. This provides the foundation for evaluating exposure 
            across coastal communities, ecosystems, and infrastructure.
          </p>
        `
      },

      {
        type: "section-title",
        text: "Physical and Environmental Parameters"
      },

      {
        type: "image-left",
        src: "/images/slr-2.png",
        html: `
          <p>
            Physical conditions influence how severely sea-level rise impacts a region. Slope, elevation, 
            and topography define how easily water can propagate inland. Slope and elevation layers were 
            reclassified into standardized vulnerability scores, emphasizing low-lying, flat zones that 
            are naturally more susceptible to inundation.
          </p>
          <p>
            Much of the coastline in Bekasi and Karawang consists of gently sloping terrain, making it 
            highly prone to water encroachment. In several areas, the only existing natural barrier 
            consists of mangrove stands, with limited engineered coastal protection structures present.
          </p>
        `
      },

      {
        type: "section-title",
        text: "Population and Infrastructure Exposure"
      },

      {
        type: "image-right",
        src: "/images/slr-3.png",
        html: `
          <p>
            Social vulnerability was assessed using population density, where densely settled areas indicate 
            higher potential human exposure. Population distribution was converted into vulnerability classes 
            to identify clusters of communities at greater risk.
          </p>
          <p>
            High population vulnerability is concentrated in coastal settlements with compact residential 
            areas and dense transportation networks. These areas tend to have more infrastructure, 
            amplifying their exposure to long-term sea-level rise.
          </p>
        `
      },

      {
        type: "image-left",
        src: "/images/slr-4.png",
        html: `
          <p>
            Infrastructure vulnerability considers essential facilities such as road networks, educational 
            centers, health services, and industrial installations. Roads of various categories, 
            distribution lines, and major structures were mapped and overlaid with hazard outputs to 
            identify critical assets at risk.
          </p>
          <p>
            The analysis indicates that projected inundation may affect <strong>3,204 buildings</strong>, 
            <strong>569.01 km of roads</strong>, <strong>102 schools or research sites</strong>, 
            <strong>8 healthcare facilities</strong>, and <strong>one steam power plant</strong>.
          </p>
        `
      },

      {
        type: "image-right",
        src: "/images/slr-5.png",
        html: `
          <p>
            Land cover was analyzed to understand how natural and built environments respond differently 
            to rising sea levels. Agricultural zones, aquaculture ponds, mangrove forests, and urban areas 
            were categorized into vulnerability levels based on their ecological and socio-economic sensitivity.
          </p>
          <p>
            Coastal ponds and agricultural areas dominate much of the shoreline, making them highly exposed 
            to inundation and salinity intrusion risks.
          </p>
        `
      },

      {
        type: "image-left",
        src: "/images/slr-6.png",
        html: `
          <p>
            Topographic variation enhances the interpretation of how water spreads inland. By combining 
            topography with slope and elevation, the study identifies specific coastal segments where 
            near-flat terrain creates long inland flood pathways.
          </p>
          <p>
            These combined physical factors highlight the structural vulnerability of both regencies to 
            sea-level rise, especially in areas lacking engineered protection.
          </p>
        `
      },

      {
        type: "section-title",
        text: "Composite Vulnerability Analysis"
      },

      {
        type: "text",
        html: `
          <p>
            All physical, social, and environmental parameters were standardized and integrated using a 
            weighted overlay method. This multi-criteria approach produces a composite vulnerability index, 
            revealing the relative risk levels across coastal sub-districts.
          </p>
          <p>
            The final analysis shows that the total inundation area ranges from 
            <strong>7,259.06 hectares (2.28%)</strong> to <strong>60,146.79 hectares (18.88%)</strong>. 
            A total of <strong>9 sub-districts in Bekasi</strong> and <strong>13 sub-districts in Karawang</strong> 
            are projected to experience varying degrees of inundation.
          </p>
        `
      },

      {
        type: "figure",
        src: "/images/slr-7.png",
        caption: "Final composite vulnerability map combining hazard, population, infrastructure, and environmental parameters."
      }

    ]
  },
  {
    id: "lst",
    title: "Model Tool Creation for Land Surface Temperature Analysis",
    desc: "Developed an automated Land Surface Temperature (LST) processing tool using ArcMap ModelBuilder to extract LST from multispectral satellite imagery through radiometric correction, brightness temperature conversion, and land surface emissivity estimation.",
    year: 2023,
    tools: "ArcMap Model Builder",
    content: [
      {
        type: "section-title",
        text: "Project Background"
      },
      {
        type: "text",
        html: `
          <p>
            This tool was developed as the final project for the Coursera
            <strong>Geographic Information Systems (GIS)</strong> specialization from University of California, Davis.
            The objective was to streamline the extraction of Land Surface
            Temperature (LST) from Landsat 8 imagery, a process
            that typically involves numerous manual steps and formula-based
            transformations. The project focuses on creating a consistent, replicable workflow that
            reduces preprocessing errors and accelerates the production of thermal
            analysis outputs for environmental interpretation.
          </p>
        `
      },
      {
        type: "section-title",
        text: "Introduction"
      },
      {
        type: "text",
        html: `
          <p>
            In recent decades, rapid urbanization and population growth have transformed Jakarta, Indonesia 
            and its surrounding areas (collectively known as Jabodetabek) into a bustling metropolitan region. 
            Along with these urban developments comes the phenomenon of Urban Heat Island (UHI), a situation 
            where urban areas experience higher temperatures than their rural counterparts due to human activities, 
            modification of land surfaces, and heat generated by various sources. Understanding the extent 
            and impact of UHI is crucial for urban planning, public health, and environmental sustainability. 
            Jakarta, being a major urban center, is particularly susceptible to this phenomenon, which can have 
            adverse effects on the well-being of its residents and the local ecosystem. <br> <br>
            This Project aims to explore the Urban Heat Island effect in the Jabodetabek area. This study 
            hypothesizes that there is a significant correlation between Land Surface Temperature (LST) and 
            vegetation cover within urban areas. Specifically, it is expected that areas with 
            higher vegetation cover will exhibit lower LST compared to areas with less greenery. Additionally, 
            the study hypothesizes a connection between the El Niño phenomenon occur in September 2023 and the 
            intensity of the Urban Heat Island effect in the Jabodetabek region. El Niño, characterized by the 
            periodic warming of sea surface temperatures in the Pacific Ocean, is known to influence global weather 
            patterns, potentially exacerbating heat-related conditions in urban areas.

          </p>
        `
      },
      {
        type: "section-title",
        text: "Automated Processing Workflow"
      },

      {
        type: "image-right",
        src: "/images/lst-2.png",
        html: `
          <p>
            For this research project, I use the Landsat 8 satellite imagery for 6th September 2023. 
            The scened used were path 122 row 64 and 65 which includes the Jabodetabek location. 
            The analysis focusing on bands 4 and 5 to calculate the Normalized Difference Vegetation 
            Index (NDVI), a crucial parameter for assessing vegetation health and coverage in urban areas. 
            Then, bands 10 and 11 from Landsat 8 will be used to obtain thermal infrared data, 
            enabling to derive precise Land Surface Temperature (LST) measurements. The NDVI and LST obtained 
            were masked with administrative boundaries from the official government website of Indonesia. <br><br>
            There are several steps that I do in this project: <br>
          </p>
        `
      },
      {
        type: "text",
        html: `
          <p>
            
            1. Make the atmosphere and sun angle corrections for the Landsat image used. <br>
            2. Create an NDVI index in the study area. <br>
            3. Determine the Land Surface Temperature from Landsat Bands 10 and 11. (Twumasi et all., 2021) <br>
            4. Create a trained classifier to determine land cover based on manually digitized areas.<br> 
            5. Analyze zonal statistics of land surface temperature based on land cover. <br>
            6. Analyze zonal statistics of land surface temperature based on administrative regions. <br>
            7. Corelate land surface temperature with NDVI. (Yue et all, 2007)
        `
      },
      {
        type: "section-title",
        text: "Results and Discussion"
      },      
      {
        type: "image",
        src: "/images/lst-1.png",
      },
      {
        type: "text",
        html: `
          <p>
            There are two main objects used in this analysis, namely the LST value in the study area, and NDVI. 
            These two objects are then analyzed by making a scatter plot to show the relationship between the two. 
            Based on the analysis carried out, the results showed that LST increased along with reduced vegetation 
            and densification of urban areas. Land cover classification is carried out using a trained classifier 
            based on naturally digitized areas. Table below shows the results of the classification of land cover 
            types along with their characteristic NDVI values. The classification results in table below are then used 
            as zones in calculating LST statistics using the zonal statistics tool.
          </p>
        `
      },
      {
        type: "figure",
        src: "/images/lst-3.png",
        caption: "Statistical summary of NDVI classification in the Jabodetabek Area."
      },
      {
        type: "text",
        html: `
          <p>
            In the analysis of the Jabodetabek area, the correlation between Land Surface Temperature (LST) and 
            Normalized Difference Vegetation Index (NDVI) was conducted. NDVI was classified utilizing a manual 
            digitized classifier, focusing on four distinct areas: Water Bodies, Urban Area, Low Vegetation, 
            and High Vegetation. The examination revealed compelling trends that underscored the intricate relationship 
            between LST and vegetation cover in the region. <br><br>
            The data pattern of LST escalation corresponding to diminished vegetation and the intensification of urban development. 
            The urban areas exhibited the most significant temperature increase, signifying a direct association 
            between land surface temperature and urbanization. This outcome underscores the urban heat island effect, 
            where densely populated and built-up areas experience higher temperatures compared to their surrounding 
            rural counterparts. The findings emphasize the critical role of land cover, particularly urbanization and 
            vegetation density, in influencing local temperature variations within the Jabodetabek area. Further exploration 
            of these patterns could contribute valuable insights for sustainable urban planning and environmental management 
            in the region.

          </p>
        `
      },
      {
        type: "section-title",
        text: "References"
      },
      {
        type: "text",
        html: `
          <p>
            Twumasi, Y. A., Merem, E. C., Namwamba, J. B., Mwakimi, O. S., Ayala-Silva, T., Frimpong, D. B., ... & Mosby, H. J. (2021). Estimation of land surface temperature from Landsat-8 OLI thermal infrared satellite data. A comparative analysis of two cities in Ghana. Advances in Remote Sensing, 10(4), 131 149. <br><br>
            Yue, W., Xu, J., Tan, W., & Xu, L. (2007). The relationship between land surface temperature and NDVI with remote sensing: application to Shanghai Landsat 7 ETM+ data. International journal of remote sensing, 28(15), 3205-3226.

          </p>
        `
      }



    ]
  },
  {
    id: "gpa1",
    title: "Redesigning RBI map for Orienteering Practice",
    desc: "Refined RBI basemap for navigation training using custom symbology and terrain clarity.",
    year: "2023-2024",
    tools: "Arcmap",
    info: "Redesigned a base map from BIG (Badan Informasi Geospasial) to create an orienteering-focused training map for high school outdoor activity students, improving readability, symbology, and terrain interpretation for practical field navigation.",
    content: [
      {
        type: "carousel",
        images: [
          "/images/gpa1-1.jpg",
          "/images/gpa1-2.jpg"
        ]
      },
      {
        type: "text",
        html: `
          <p>
            This project involved redesigning an RBI (Rupa Bumi Indonesia) basemap 
            obtained from BIG to create a focused map for orienteering training activities. 
            The goal was to support orienteering training for the new member of high school 
            outdoor organisation by providing a simplified and interpretation-friendly spatial reference. <br> <br>
            The redesign process included trimming the extent to cover only the 
            orienteering practice area, removing unnecessary clutter, and enhancing 
            terrain information such as contour visibility and 
            key topographic indicators. Additional refinements were made to highlight 
            trails, boundaries, and reference points essential for beginner-level 
            navigation.
          </p>
        `
      }
    ]
  },
  {
    id: "gpa2",
    title: "Route, vegetation, and hazard area mapping on Juang Baturaden Route, Slamet Mountain",
    desc: "Supervised expedition-based mapping of vegetation, track conditions, and hazard zones.",
    year: 2025,
    tools: "QGIS, GPS Handheld, Avenza Maps",
    info: "Route, vegetation, and hazard area mapping along the Juang Baturaden hiking route on Mount Slamet to support land-cover assessment and safety planning for student expedition activities.",
    content: [
      {
        type: "image",
        src: "/images/gpa2-1.png",
        alt: "Flood Hazard map"
      },
      {
        type: "text",
        html: `
          <p>I supervised an expedition along the Juang Baturaden Route of Mount Slamet to obtain field data for a route-mapping 
          and hazard-assessment exercise. The expedition served as the final field competency exercise for junior members of my 
          outdoor organization. Prior to the fieldwork, I trained and guided the team in essential data-collection techniques, 
          including GPS logging, land-cover observation, and basic hazard identification. <br> <br>
          Throughout the ascent, the trainees collected track logs, documented vegetation conditions, and recorded observations 
          related to slope steepness, trail stability, and other terrain characteristics. Afterward, I supervised the processing 
          of these datasets in a GIS environment, where the team constructed a refined route map, identified risk-prone segments, 
          and highlighted key environmental features. <br> <br>
          The resulting map functions as a practical reference for future navigation training and the method for data collection 
          functions as a learning tool that helps new members understand the fundamentals of field mapping, environmental 
          assessment, and safe route planning.</p>
        `
      }
    ]
  },
  {
  id: "inatews",
  title: "System Processing Development of InaTEWS Merah Putih",
  desc: "Professional work involving geospatial preprocessing, tsunami source construction, numerical model automation, and tsunami propagation visualization for Indonesia’s national tsunami early warning system.",
  year: "2024-2025",
  tools: "Ubuntu, COMCOT, QGIS, Bash, Python",
  info: "Professional tsunami modelling and data processing for the InaTEWS Merah Putih initiative.",

  content: [

    // -------------------------
    // SECTION 1 — TECTONIC CONTEXT
    // -------------------------
    { type: "section-title", text: "Data preparation and collection" },

    {
      type: "image-right",
      src: "/images/tews-1.png",
      html: `
        <p>
          As part of the tsunami study workflow, I was responsible for acquiring, integrating, and preprocessing 
          all necessary geospatial datasets using GIS platforms. I utilized QGIS to compile high-resolution 
          bathymetry and topography datasets and merge them into digital elevation models (DEMs) suitable for 
          tsunami simulation. Seismic and fault parameter data, sourced from global and regional catalogs, 
          were imported as shapefiles and feature classes.  

        </p>
      `
    },

    {
      type: "image-left",
      src: "/images/tews-2.png",
      html: `
        <p>
          I applied spatial queries and attribute-based filters to 
          identify relevant seismic events and prepare input for source characterization.<br><br>
          High-resolution bathymetry and topography are collected and merged into seamless DEMs
          using GIS platforms. These DEMs serve as the base environment
          for tsunami propagation and inundation modelling.
        </p>
      `
    },

    { type: "section-title", text: "Domain, scenario, and tsunami source design" },

    {
      type: "image-right",
      src: "/images/tews-3.png",
      html: `
        <p>
          GIS tools was applied to create grided sources and construct computational domains that represent regional 
          tectonics. Fault segments were digitized in QGIS, with fault parameters such as magnitude, strike, dip, 
          slip, and rupture dimensions recorded in the attribute table. To capture tsunami propagation with the finest grid, I developed innovative methods to move layer 
          2 and layer 3 based on the longitude index of a moving point source. This approach allows for adaptive 
          grid refinement, ensuring that computational resources are concentrated in areas of greatest interest 
          as the tsunami wave progresses. 
        </p>
      `
    },

    {
      type: "carousel",
      images: [
        "/images/tews-4.png",
        "/images/tews-14.png"
      ]
    },

    { type: "section-title", text: "Automating the Tsunami Modelling Pipeline" },

    {
      type: "text",
      html: `
        <p>
          The simulation procedure utilizes multiprocessors; hence the Ubuntu operating system is required to 
          support this multi-run simulation. Considering the available hardware, the simulation optimizes the 
          number of threads per hardware unit. With the core count available, each of the 7 PC's can run with 
          5 terminals simultaneously. Each terminal utilizes 11-14 threads, totaling 56-72 threads across all 
          terminals, which represents an optimal configuration. In summary, over a span of 60 hours, the 
          simulation generates approximately 525 scenarios, starting from initial data conditions, with output 
          formatted data as desired (asc, txt, and nc). This parallel processing approach significantly reduces 
          the total simulation time, allowing us to achieve our objectives within the given timeframe. <br><br> 
          In the first stage of the simulation, scenario level 1 was used, resulting in 813-point sources, as 
          previously described. The 7 PCs have specific names: the Lenovo ThinkStation PC's are named PC1 
          to PC6, while the HP PC is named PCMASTER. With these seven PCs available, each PC runs 
          simulations for the epicenter (point source) region (Figure 6.52). The PCMaster acts as a backup and 
          assists the other six PCs in running the simulations. Since significant computing power is required to 
          run 10,000 scenarios, a backup system using PCMaster is implemented to minimize potential issues. 
        </p>
      `
    },

    {
      type: "figure",
      src: "/images/tews-13.png",
      caption: "The parallel computing mechanism based on longitude index in each PC."
    },

    { type: "section-title", text: "Model result Visualization" },

    {
      type: "text",
      html: `
        <p>
          Following tsunami simulations, I create the visualization of model output within GIS platforms to produce 
          interpretable and communicative spatial products. Using the raster output of maximum tsunami height and 
          wave arrival time, I applied classified color symbology and custom colormaps to create clear and visually 
          effective hazard maps. I also generated time-series snapshots by converting sequential model outputs into 
          image layers to demonstrate tsunami wave evolution. These visual products were integral to hazard 
          communication, risk mapping, and technical reporting.

        </p>
      `
    },

    {
      type: "carousel",
      images: [
        "/images/tews-6.png",
        "/images/tews-8.png",
        "/images/tews-9.png",
        "/images/tews-10.png"
      ]
    },

    { type: "section-title", text: "Coastal Profiling & Hazard Analysis" },

    {
      type: "figure",
      src: "/images/tews-12.png",
      caption: "Time series of tsunami propagation on a certain point."
    },

    {
      type: "text",
      html: `
        <p>
        Spatial analysis of tsunami hazard was carried out using a series of 
        GIS-based techniques, with emphasis on hazard assessment and coastal profiling. 
        Model-generated tsunami height rasters were classified into meaningful hazard categories to support consistent 
        comparison across scenarios. 

        </p>
      `
    },

    {
      type: "image-left",
      src: "/images/tews-11.png",
      html: `
        <p>
        Along the coastline, i generated a regularly 
        spaced transects and sampling points to extract wave-height values from the model outputs, 
        producing detailed spatial profiles of tsunami exposure for different coastal segments. 
        For additional analyses, zonal statistics and buffer-based evaluations were applied to 
        quantify hazard levels within administrative boundaries and to identify areas 
        with elevated exposure or risk.
        </p>
      `
    }
  ]
  },
  {
    id: "cl",
    title: "Coastline Extraction and Analysis",
    desc: "Derived shoreline positions from Landsat imagery using NDVI and Tasseled Cap components.",
    year: 2023,
    tools: "ArcMap, Python, Statistical Analysis",
    info: "Undergraduate thesis project assessing coastal vulnerability.",
    content: [
      {
        type: "text",
        html: `
          <p>I completed this project as part of my undergraduate remote-sensing practicum, where I extracted coastlines 
          from Landsat imagery using spectral indices. By combining NDVI and Tasseled Cap components (Brightness, 
          Greenness, Wetness), I extract the land–water boundary and produced a clear shoreline representation. The indices 
          were processed using Raster Calculator, followed by manual refinement in areas with spectral ambiguity like 
          fishpond or mangrove forest. This project introduced me to spectral analysis for coastal mapping and formed the 
          basis of my later work on coastal hazard and vulnerability assessment. </p>
        `
      },
      {
        type: "image",
        src: "/images/cl-1.png",
        alt: "Flood Hazard map"
      }
    ]
  },
  {
    id: "p1",
    title: "Coastal Hazard Assessment for Climate Risk Analysis",
    desc: "Inundation modelling and shoreline-change analysis for multi-site coastal hazard evaluation.",
    year: 2023,
    tools: "QGIS, Python, Satellite Imagery, Spatial Analysis",
    info: "Coastal inundation modelling and shoreline change analysis for three sites in Banggai and Indramayu.",
    content: [
      {
        type: "section-title",
        text: "Project Overview"
      },
      {
        type: "text",
        html: `
          <p>This project represents my first professional experience contributing to a coastal hazard assessment within a consultancy setting. 
          While project details and client information are confidential, I was responsible for two major technical components: 
          the development of coastal inundation models and the execution of a shoreline change (erosion–accretion) analysis across 
          three coastal locations in Banggai and Indramayu Regency.</p>
        `
      },

      {
        type: "section-title",
        text: "Coastal Inundation Modelling"
      },
      {
        type: "carousel-left",
        images: [
          "/images/p1-4.png",
          "/images/p1-5.png",
          "/images/p1-6.png"
        ],
        html: `
          <p>I developed GIS-based coastal inundation models to estimate flood extents under several water level scenarios, 
          incorporating sea-level rise projections and tidal conditions. This included processing coastal topography, preparing 
          scenario-based water level inputs, and producing spatial inundation layers tailored to the coastline characteristics of 
          each study site.</p>
        `
      },
      {
        type: "carousel-right",
        images: [
          "/images/p1-1.png",
          "/images/p1-2.png",
          "/images/p1-3.png"
        ],
        html: `
          <p>In parallel, I conducted a shoreline erosion–accretion analysis using multi-temporal satellite imagery. 
          Shorelines were extracted through NDWI-based segmentation and refined manually in high-uncertainty areas. 
          A transect-based method using Digital Shoreline Analysis System (DSAS) was then used to quantify shoreline retreat or advancement, identifying long-term 
          erosion hotspots and sedimentation zones that influence coastal hazard exposure.</p>
        `
      },
      {
        type: "section-title",
        text: "Result & Contribution"
      },
      {
        type: "text",
        html: `
          <p>My outputs formed the physical hazard layers supporting a broader climate risk assessment. 
          Despite being my first consultancy project, I independently handled core spatial workflows 
          and contributed actionable insights to the project team. 
          The deliverables provided a clearer understanding of inundation potential and shoreline dynamics 
          for climate adaptation planning in the studied regions.</p>
        `
      }
    ]
  },
  {
    id: "p2",
    title: "Physical Climate Hazard & Risk Assessment",
    desc: "Technical workflow involving tidal climatology, extreme-water analysis, and inundation modelling.",
    year: 2025,
    tools: "Python, ArcGIS, Statistical Analysis",
    content: [

      /* ------------------------------------------------------ */
      /* 1. CLIMATE–OCEAN SETTINGS */
      /* ------------------------------------------------------ */
      {
        type: "section-title",
        text: "Ocean–Climate Characterisation"
      },
      {
        type: "carousel-left",
        images: [
          "/images/p2-1.png",   // Gambar 2-17: lokasi stasiun pasut
          "/images/p2-2.png",   // Gambar 2-18: pola pasang surut harian
          "/images/p2-3.png"    // Gambar 2-20: komponen harmonik utama
        ],
        html: `
          <p>
          The analysis began with assembling long-term observations of water levels.
          I processed multi-year sea-level records by cleaning outliers, interpolating
          missing intervals, and transforming timestamps into continuous hydrodynamic
          series. Tidal harmonic analysis was performed to quantify dominant tidal
          constituents, while monthly filtering was applied to isolate monsoonal
          variations. 
          </p>

          <p>
          This technical preparation was essential for producing a reliable tidal
          climatology baseline, which later became the reference for identifying
          extreme-water anomalies under tidal conditions.
          </p>
        `
      },
      {
        type: "section-title",
        text: "Deriving Extreme-Water Scenarios"
      },
      
      {
        type: "text",
        html: `
          <p>
          Extreme water levels were extracted statistically to obtain cumulative distribution function. 
          this function then used to analyze extreme events using threshold of 1% (low) 99% (high), 
          2% (low) 98% (high), and 5% (low) 95% (high). Next, the number of extreme water levels events for each of the 
          above percentages is calculated to determine the months of occurrence. This calculation is used 
          as input for a model of flooding or drought events influenced by tidal factors.
          </p>
        `
      },
      {
        type: "img-grid",
        images: [
          "/images/p2-4.png",
          "/images/p2-5.png"
        ]
      },
      {
        type: "image-right",
        src: "/images/p2-6.png",
        html: `
          <p>
          Apart from tidal analysis and cumulative distribution function, several climate-induced hazard also assessed
          in developing the hazard scenario for inundation modelling. Climate-induced hazard used in this project are 
          sea level rise, storm surge, and local flood due to high rainfall. Table besides shows the hazard component
          used in inundation model scenario.
          </p>
        `
      },
      {
        type: "section-title",
        text: "Inundation Hazard Modelling"
      },
      {
        type: "text",
        html: `
          <p>
          Using the extreme-water scenarios developed, I generated inundation extents through
          bathub model flooding. Due to lack of available high resolution data source for digital terrain 
          model (DTM) at the project area, I used open source digital surface model (DSM) and 
          filtered the surface component like buildings and trees. While the result still have some residue
          of corrected surface component, the filtered DTM is considered smooth and usable for model use.
          </p>
        `
      },
      {
        type: "text",
        html: `
          <p>
          Bathub model flooding was then applied using raster calculator. I create a conditional function that 
          select value from DTM that lower than rising water level and categorize id based on flood run up height.
          These serve as the hazard layers used in broader climate-risk assessments.
          </p>
        `
      },
      {
        type: "figure",
        src: "/images/p2-8.png",   // Gambar in section 4.4 (extent of pasang tertinggi)
        caption: "Example hazard layer derived from extreme tidal elevation."
      },
    ]
  },
  {
    id: "t2",
    title: "Tsunami Propagation Modelling and Inundation Hazard Assessment",
    desc: "Developed a numerical tsunami hazard model integrating seismic scenarios, wave propagation dynamics, and extreme water-level analysis for coastal risk assessment.",
    year: 2024,
    tools: "Python, Pandas, NumPy, ArcGIS, Tsunami Modelling Toolkit",
    info: "Professional consultancy work involving megathrust tsunami modelling, inundation hazard mapping, and return-period estimation.",
    content: [

      // SECTION TITLE
      { type: "section-title", text: "Project Overview" },

      {
        type: "text",
        html: `
          <p>
            This project focused on developing a megathrust tsunami propagation model for a coastal and estuarine region in eastern Indonesia. 
            The study provided scientific inputs for physical hazard and risk assessment, particularly related to tsunami inundation potential, 
            return periods, and extreme water-level conditions.
          </p>
        `
      },

      // IMAGE OR FIGURE (OPTIONAL)
      {
        type: "image",
        src: "/images/t2-4.png",
        alt: "Tsunami Modelling Output"
      },

      // SECTION TITLE
      { type: "section-title", text: "Technical Contributions" },

      // IMAGE LEFT
      {
        type: "image-left",
        src: "/images/t2-6.png",
        html: `
          <p>
            My primary role involved constructing the tsunami hazard model using Python and GIS-based preprocessing workflows. 
            I developed multiple seismic scenarios representing potential megathrust events to simulate wave propagation patterns 
            as they travel across deep ocean basins and interact with the coastal geometry. The modelling framework included:
          </p>
          <ul>
            <li>Developing scenario-based seismic source parameters for tsunami generation.</li>
            <li>Preprocessing bathymetry and topography datasets to build a seamless simulation grid.</li>
            <li>Running wave propagation simulations to estimate nearshore wave height amplification.</li>
          </ul>
        `
      },
      { type: "section-title", text: "Data Processing and Domain Design" },

      {
        type: "carousel-left",
        images: [
          "/images/t2-1.png",
          "/images/t2-2.png",
        ],
        html: `
          <p>
            I contributed to the design and refinement of the simulation domain, ensuring accurate resolution in areas 
            with complex fault geometry. Using ArcGIS, I performed data cleaning, spatial filtering, and transformation 
            of bathymetric and elevation datasets to prepare high-quality model inputs.
          </p>
          <p>
            The analysis also leveraged Python libraries such as Pandas and NumPy for large-scale dataset management, enabling 
            efficient processing of seismic input parameters and post-simulation outputs.
          </p>
        `
      },
      { type: "section-title", text: "Hazard & Return Period Analysis" },

      {
        type: "text",
        html: `
          <p>
            Post-processing included extracting extreme water levels, inundation depths, and elevation time serries for each scenario. 
            These outputs were analyzed to estimate the statistical return period of tsunami hazards and to classify 
            risk-prone coastal segments. 
          </p>
        `
      },

      // CAROUSEL
      {
        type: "carousel",
        images: [
          "/images/t2-3.png",
          "/images/t2-5.png",
        ]
      },

      // SECTION TITLE
      { type: "section-title", text: "Outcome" },

      {
        type: "text",
        html: `
          <p>
            The project delivered comprehensive tsunami model scenarios, return-period estimations, and inundation 
            hazard maps. These technical outputs served as key scientific inputs for a multidisciplinary physical 
            hazard and risk assessment framework, contributing to preparedness and safety planning in the study area.
          </p>
        `
      }
    ]
  },
  {
    id: "las",
    title: "Vegetation Inventory & LiDAR-Based Carbon Assessment",
    desc: "Professional forest inventory and LiDAR analysis for biomass and carbon estimation across primary and secondary forests.",
    year: 2025,
    tools: "R, ArcGIS, LiDAR (.las), CHM, DTM Processing",
    content: [
      {
        type: "section-title",
        text: "Project Overview"
      },
      {
        type: "text",
        html: `
          <p>This project involved a large-scale vegetation inventory and LiDAR-based carbon assessment covering more than 16,000 
          hectares of primary and secondary forest in Indonesia. The assessment combined field vegetation sampling with 
          airborne LiDAR analysis to evaluate forest structure, species distribution, and carbon storage potential.</p>
        `
      },

      {
        type: "section-title",
        text: "Technical Contribution"
      },
      {
        type: "carousel-left",
        images: [
          "/images/las-1.png",
          "/images/las-2.png",
        ],
        html: `
          <p>
          I developed an optimized workflow for processing LiDAR-derived forest metrics. The workflow centered on refining an R-based 
          automation script for treetop detection and canopy analysis using LAS data. Enhancements included multi-core utilization, 
          memory control, and automatic log file creation to record processing durations, file sizes, extents, and potential errors.</p>
          <p>Using ArcGIS and R, I preprocessed 3D LiDAR data by filtering noise, clipping tiles, normalizing elevations, and generating 
          Digital Terrain Models (DTM) and Canopy Height Models (CHM). Tree detection was performed using the Local Maximum Filtering 
          (LMF) method, followed by canopy segmentation with Marker-Controlled Watershed Segmentation (MCWS) to delineate individual 
          crowns.</p>
          <p>The analysis produced structured canopy layers (understorey, midstorey, emergent) and tree-level attributes used as inputs 
          for biomass and carbon estimation. This workflow significantly reduced processing time while maintaining consistency across 
          thousands of hectares of data.
          </p>
        `
      },

      {
        type: "section-title",
        text: "Sample Visualization"
      },
      {
        type: "carousel",
        images: [
          "/images/las-3.jpg",
          "/images/las-4.jpg",
          "/images/las-5.png"
        ]
      },

      {
        type: "section-title",
        text: "Outcome"
      },
      {
        type: "text",
        html: `
          <p>The optimized workflow successfully delivered complete forest inventory metrics including canopy height classification, tree counts, biomass estimation, and carbon calculation. The automated process improved operational efficiency and provided a scalable method for large-area forest monitoring in sustainability and land-management applications.</p>
        `
      }
    ]
  },
  {
    id: "kal",
    title: "Preliminary Survey of Marine Resource Potential for Integrated Industry",
    desc: "Field observation, social mapping, and coastal suitability assessment for early-stage planning.",
    year: 2025,
    tools: "GPS Survey, QGIS, ArcGIS, Environmental Observation",
    content: [

      /* SECTION: PROJECT INTRO */
      {
        type: "section-title",
        text: "Project Overview"
      },
      {
        type: "text",
        html: `
          <p>
            This project involved a preliminary coastal survey and social assessment to
            support the early planning stage of a large-scale marine industry
            development initiative. The work focused on evaluating visual observated physical
            suitability, environmental conditions, and local socioeconomic dynamics
            across coastal areas in interest region. The objective was to provide
            foundational technical inputs for the upcoming feasibility study.
          </p>
        `
      },

      /* SECTION: TECHNICAL ROLE */
      {
        type: "section-title",
        text: "Technical Contribution"
      },

      /* Row: survey design + satellite/field prep */
      {
        type: "image-left",
        src: "/images/kal-1.JPG",  // Replace with your actual image or remove
        html: `
          <p>
            Designed a structured coastal survey plan covering visual environmental observations
            and social, infrastructure, and economic condition relevant for seaweed cultivation. 
            This included preparing spatial base layers, tide charts, and geolocation grids to guide 
            field data collection.
          </p>
        `
      },

      /* Row: data collection */
      {
        type: "image-right",
        src: "/images/kal-2.JPG", // Replace or remove if you don't have it
        html: `
          <p>
            Conducted on-site environmental and physical observations to document 
            coastline conditions, existing cultivation activities, potential anchoring 
            zones, and accessibility to essential infrastructure. The assessment also 
            supported preliminary social mapping, identifying key local 
            stakeholders and documenting coastal resource utilization patterns.
          </p>
        `
      },

      {
        type: "text",
        html: `
          <p>
            Supported the feasibility study team by producing thematic maps, geographic 
            references, and environmental summaries derived from both field notes and 
            remote sensing data. These outputs enabled an early understanding of site 
            suitability across multiple candidate locations.
          </p>
        `
      },

      /* SECTION: OUTPUTS */
      {
        type: "section-title",
        text: "Project Outcome"
      },
      {
        type: "text",
        html: `
          <p>
            The survey provided essential baseline information on coastal conditions,
            community structures, and environmental characteristics relevant for
            industry facility placement. The analysis identified potential
            areas for offshore cultivation, opportunities for onshore supporting
            facilities, and key considerations related to infrastructure, logistics,
            water resources, and environmental constraints.
          </p>
          <p>
            These outputs formed a critical reference for the subsequent feasibility
            assessment while maintaining full compliance with confidentiality and
            non-disclosure requirements.
          </p>
        `
      },

      /* SECTION: NDA */
      {
        type: "section-title",
        text: "NDA Compliance"
      },
      {
        type: "text",
        html: `
          <ul>
            <li>Avoided disclosure of client names or internal project details.</li>
            <li>No publication of exact coordinates or restricted spatial datasets.</li>
            <li>Excluded internal reports, diagrams, or proprietary methodologies.</li>
            <li>All shared content focuses only on general workflow and technical steps.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "web",
    title: "Personal Web Portfolio Development",
    desc: "Designed and built an interactive portfolio to showcase GIS, remote sensing, and coastal modelling projects.",
    year: 2025,
    tools: "HTML, CSS, JavaScript, UI/UX Principles",
    content: [
      {
        type: "section-title",
        text: "Project Overview"
      },
      {
        type: "image",
        src: "/images/web-1.png",
        alt: "Web Page Visualization"
      },
      {
        type: "text",
        html: `
          <p>
            This project focused on designing and developing a personal portfolio website as a centralized platform to 
            showcase my professional work in GIS, environmental analysis, coastal hazard assessment, and spatial 
            data modeling. The site was built using native HTML, CSS, and JavaScript, with incremental improvements 
            guided through iterative experimentation and refinement. <br><br>
          </p>
          <p>
            The objective was to create a clean and functional interface that effectively displays technical projects 
            through interactive components such as modal popups, dynamic filtering, and responsive grid layouts. 
            ChatGPT was used extensively as a collaborative tool to refine design decisions, optimize layout flow, 
            and debug complex UI components—especially the multi-carousel modal system.
          </p>
        `
      },

      {
        type: "section-title",
        text: "Technical Contribution"
      },
      {
        type: "text",
        html: `
          <ul>
            <li><strong>UI/UX Concept Design:</strong> Defined a clean and modern visual style suitable for a technical portfolio, focusing on readability, hierarchy, and responsive behavior.</li>
            <li><strong>Custom Modal System:</strong> Built a reusable modal structure with support for images, multi-carousel content, side-by-side layouts, and structured storytelling blocks.</li>
            <li><strong>Dynamic Project Filtering:</strong> Implemented category-based filtering (Professional, Academic, Personal) with automatic project counts and responsive positioning.</li>
            <li><strong>Responsive Grid Layout:</strong> Designed a flexible project grid with adaptive spacing to ensure consistent alignment across screen widths.</li>
            <li><strong>Code Organization:</strong> Structured the website into modular JS components (modal handler, project data management, interactive UI scripts).</li>
          </ul>
        `
      }
    ]
  }

];
