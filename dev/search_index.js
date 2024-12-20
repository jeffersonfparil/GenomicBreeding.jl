var documenterSearchIndex = {"docs":
[{"location":"models/","page":"Models","title":"Models","text":"CurrentModule = GenomicBreeding","category":"page"},{"location":"models/#Models","page":"Models","title":"Models","text":"","category":"section"},{"location":"models/","page":"Models","title":"Models","text":"Models","category":"page"},{"location":"models/","page":"Models","title":"Models","text":"","category":"page"},{"location":"models/#Linear-mixed-models-for-analysing-trial","page":"Models","title":"Linear mixed models for analysing trial","text":"","category":"section"},{"location":"models/#Linear-models-for-genomic-prediction","page":"Models","title":"Linear models for genomic prediction","text":"","category":"section"},{"location":"models/#Non-linear-models-for-genomic-prediction","page":"Models","title":"Non-linear models for genomic prediction","text":"","category":"section"},{"location":"models/#Epifeat","page":"Models","title":"Epifeat","text":"","category":"section"},{"location":"","page":"GenomicBreeding","title":"GenomicBreeding","text":"CurrentModule = GenomicBreeding","category":"page"},{"location":"#GenomicBreeding","page":"GenomicBreeding","title":"GenomicBreeding","text":"","category":"section"},{"location":"","page":"GenomicBreeding","title":"GenomicBreeding","text":"Documentation for GenomicBreeding.","category":"page"},{"location":"","page":"GenomicBreeding","title":"GenomicBreeding","text":"","category":"page"},{"location":"","page":"GenomicBreeding","title":"GenomicBreeding","text":"Modules = [GenomicBreeding]","category":"page"},{"location":"#GenomicBreeding.Genomes","page":"GenomicBreeding","title":"GenomicBreeding.Genomes","text":"Genomes struct\n\nContaines unique entries and loci_alleles where allele frequencies can have missing values\n\nConstructor\n\nGenomes(; n::Int64 = 1, p::Int64 = 2)\n\nFields\n\nentries: names of the n entries or samples\npopulations: name/s of the population/s each entries or samples belong to\nloci_alleles: names of the p loci-alleles combinations (p = l loci x a-1 alleles) including the \n\nchromsome or scaffold name, position, all alleles, and current allele separated by tabs (\"\\t\")\n\nallele_frequencies: n x p matrix of allele frequencies between 0 and 1 which can have missing values\nmask: n x p matrix of boolean mask for selective analyses and slicing\n\nExamples\n\njulia> genomes = Genomes(n=2, p=2)\nGenomes([\"\", \"\"], [\"\", \"\"], [\"\", \"\"], Union{Missing, Float64}[missing missing; missing missing], Bool[0 0; 0 0])\n\njulia> fieldnames(Genomes)\n(:entries, :populations, :loci_alleles, :allele_frequencies, :mask)\n\njulia> genomes.entries = [\"entry_1\", \"entry_2\"];\n\njulia> genomes.populations = [\"pop_1\", \"pop_1\"];\n\njulia> genomes.loci_alleles = [\"chr1\\t12345\\tA|T\\tA\", \"chr2\\t678910\\tC|D\\tD\"];\n\njulia> genomes.allele_frequencies = [0.5 0.25; 0.9 missing];\n\njulia> genomes.mask = [true true; true false];\n\njulia> genomes\nGenomes([\"entry_1\", \"entry_2\"], [\"pop_1\", \"pop_1\"], [\"chr1\\t12345\\tA|T\\tA\", \"chr2\\t678910\\tC|D\\tD\"], Union{Missing, Float64}[0.5 0.25; 0.9 missing], Bool[1 1; 1 0])\n\n\n\n\n\n","category":"type"},{"location":"#GenomicBreeding.Phenomes","page":"GenomicBreeding","title":"GenomicBreeding.Phenomes","text":"Phenomes struct\n\nConstains unique entries and traits where phenotype data can have missing values\n\nConstructor\n\nPhenomes(; n::Int64 = 1, t::Int64 = 2)\n\nFields\n\nentries: names of the n entries or samples\npopulations: name/s of the population/s each entries or samples belong to\ntraits: names of the t traits\nphenotypes: n x t matrix of numeric (R) phenotype data which can have missing values\nmask: n x t matrix of boolean mask for selective analyses and slicing\n\nExamples\n\njulia> phenomes = Phenomes(n=2, t=2)\nPhenomes([\"\", \"\"], [\"\", \"\"], [\"\", \"\"], Union{Missing, Float64}[missing missing; missing missing], Bool[0 0; 0 0])\n\njulia> fieldnames(Phenomes)\n(:entries, :populations, :traits, :phenotypes, :mask)\n\njulia> phenomes.entries = [\"entry_1\", \"entry_2\"];\n\njulia> phenomes.populations = [\"pop_A\", \"pop_B\"];\n\njulia> phenomes.traits = [\"height\", \"yield\"];\n\njulia> phenomes.phenotypes = [200.0 2.5; 150.0 missing];\n\njulia> phenomes.mask = [true true; true false];\n\njulia> phenomes\nPhenomes([\"entry_1\", \"entry_2\"], [\"pop_A\", \"pop_B\"], [\"height\", \"yield\"], Union{Missing, Float64}[200.0 2.5; 150.0 missing], Bool[1 1; 1 0])\n\n\n\n\n\n","category":"type"},{"location":"#GenomicBreeding.SimulatedEffects","page":"GenomicBreeding","title":"GenomicBreeding.SimulatedEffects","text":"SimulatedEffects struct\n\nContains:\n\nIdentification, i.e. trait, year, season, harvest, site, and replication\nAdditive environmental effects:\nyear\nseason\nsite\nEnvironmental interaction effects:\nseasonsxyear\nharvestsxseasonxyear\nsitesxharvestxseasonxyear\nSpatial effects including the field layout per year-season-harvest-site combination\nfield_layout\nreplicationsxsitexharvestxseasonxyear\nblocksxsitexharvestxseasonxyear\nrowsxsitexharvestxseasonxyear\ncolsxsitexharvestxseasonxyear\nGenetic effects\nadditive_genetic\ndominance_genetic\nepistasis_genetic\nGxE effects\nadditiveallelexsitexharvestxseasonx_year\ndominanceallelexsitexharvestxseasonx_year\nepistasisallelexsitexharvestxseasonx_year\n\nConstructor\n\nSimulatedEffects()\n\n\n\n\n\n","category":"type"},{"location":"#GenomicBreeding.TEBV","page":"GenomicBreeding","title":"GenomicBreeding.TEBV","text":"Trial-estimate breeding values (TEBV) struct\n\nContains trial-estimated breeding values as generated by analyse(trials::Trials, ...).\n\nFields\n\ntraits: names of the traits t traits\nformulae: best-fitting formula for each trait\nmodels: best-fitting linear mixed model for each trait\ndf_BLUEs: best linear unbiased estimators or fixed effects table of each best fitting model\ndf_BLUPs: best linear unbiased predictors or random effects table of each best fitting model\ndf_TEBVs: breeding values of each entry per trait\n\nExamples\n\njulia> tebv = TEBV(traits=[\"\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> tebv.traits\n1-element Vector{String}:\n \"\"\n\n\n\n\n\n","category":"type"},{"location":"#GenomicBreeding.Trials","page":"GenomicBreeding","title":"GenomicBreeding.Trials","text":"Trials struct\n\nContains phenotype data across years, seasons, harvest, sites, populations, replications, blocks, rows, and columns\n\nConstructor\n\nTrials(; n::Int64 = 2, p::Int64 = 2)\n\nFields\n\nphenotypes: n x t matrix of numeric phenotype data which can have missing values\ntraits: names of the traits t traits\nyears: names of the years corresponding to each row in the phenotype matrix\nseasons: names of the seasons corresponding to each row in the phenotype matrix\nharvests: names of the harvests corresponding to each row in the phenotype matrix\nsites: names of the sites corresponding to each row in the phenotype matrix\nreplications: names of the replications corresponding to each row in the phenotype matrix\nblocks: names of the blocks corresponding to each row in the phenotype matrix\nrows: names of the rows corresponding to each row in the phenotype matrix\ncols: names of the cols corresponding to each row in the phenotype matrix\nentries: names of the entries corresponding to each row in the phenotype matrix\npopulations: names of the populations corresponding to each row in the phenotype matrix\n\nExamples\n\njulia> trials = Trials(n=1, t=2)\nTrials(Union{Missing, Float64}[missing missing], [\"\", \"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"], [\"\"])\n\njulia> fieldnames(Trials)\n(:phenotypes, :traits, :years, :seasons, :harvests, :sites, :replications, :blocks, :rows, :cols, :entries, :populations)\n\n\n\n\n\n","category":"type"},{"location":"#Base.:==-Tuple{Genomes, Genomes}","page":"GenomicBreeding","title":"Base.:==","text":"Base.:(==)(x::Genomes, y::Genomes)::Bool\n\nEquality of Genomes structs using the hash function defined for Genomes structs.\n\nExamples\n\njulia> genomes_1 = genomes = Genomes(n=2,p=4);\n\njulia> genomes_2 = genomes = Genomes(n=2,p=4);\n\njulia> genomes_3 = genomes = Genomes(n=1,p=2);\n\njulia> genomes_1 == genomes_2\ntrue\n\njulia> genomes_1 == genomes_3\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#Base.:==-Tuple{Phenomes, Phenomes}","page":"GenomicBreeding","title":"Base.:==","text":"Base.:(==)(x::Phenomes, y::Phenomes)::Bool\n\nEquality of Phenomes structs using the hash function defined for Phenomes structs.\n\nExamples\n\njulia> phenomes_1 = phenomes = Phenomes(n=2, t=4);\n\njulia> phenomes_2 = phenomes = Phenomes(n=2, t=4);\n\njulia> phenomes_3 = phenomes = Phenomes(n=1, t=2);\n\njulia> phenomes_1 == phenomes_2\ntrue\n\njulia> phenomes_1 == phenomes_3\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#Base.:==-Tuple{SimulatedEffects, SimulatedEffects}","page":"GenomicBreeding","title":"Base.:==","text":"Base.:(==)(x::SimulatedEffects, y::SimulatedEffects)::Bool\n\nEquality of SimulatedEffects structs using the hash function defined for SimulatedEffects structs.\n\nExamples\n\njulia> effects_1 = SimulatedEffects();\n\njulia> effects_2 = SimulatedEffects();\n\njulia> effects_3 = SimulatedEffects(); effects_3.id[1] = \"SOMETHING_ELSE\";\n\njulia> effects_1 == effects_2\ntrue\n\njulia> effects_1 == effects_3\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#Base.:==-Tuple{TEBV, TEBV}","page":"GenomicBreeding","title":"Base.:==","text":"Base.:(==)(x::TEBV, y::TEBV)::Bool\n\nEquality of TEBV structs using the hash function defined for TEBV structs.\n\nExamples\n\njulia> tebv_1 = TEBV(traits=[\"\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> tebv_2 = TEBV(traits=[\"\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> tebv_3 = TEBV(traits=[\"SOMETHING_ELSE\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> tebv_1 == tebv_2\ntrue\n\njulia> tebv_1 == tebv_3\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#Base.:==-Tuple{Trials, Trials}","page":"GenomicBreeding","title":"Base.:==","text":"Base.:(==)(x::Trials, y::Trials)::Bool\n\nEquality of Trials structs using the hash function defined for Trials structs.\n\nExamples\n\njulia> trials_1 = trials = Trials(n=2, t=4);\n\njulia> trials_2 = trials = Trials(n=2, t=4);\n\njulia> trials_3 = trials = Trials(n=1, t=2);\n\njulia> trials_1 == trials_2\ntrue\n\njulia> trials_1 == trials_3\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#Base.hash-Tuple{Genomes, UInt64}","page":"GenomicBreeding","title":"Base.hash","text":"Base.hash(x::Genomes, h::UInt)::UInt\n\nHash a Genomes struct using the entries, populations and locialleles. We deliberately excluded the allelefrequencies, and mask for efficiency.\n\nExamples\n\njulia> genomes = Genomes(n=2, p=2);\n\njulia> typeof(hash(genomes))\nUInt64\n\n\n\n\n\n","category":"method"},{"location":"#Base.hash-Tuple{Phenomes, UInt64}","page":"GenomicBreeding","title":"Base.hash","text":"Base.hash(x::Phenomes, h::UInt)::UInt\n\nHash a Phenomes struct.\n\nExamples\n\njulia> phenomes = Phenomes(n=2, t=2);\n\njulia> typeof(hash(phenomes))\nUInt64\n\n\n\n\n\n","category":"method"},{"location":"#Base.hash-Tuple{SimulatedEffects, UInt64}","page":"GenomicBreeding","title":"Base.hash","text":"Base.hash(x::SimulatedEffects, h::UInt)::UInt\n\nHash a SimulatedEffects struct.\n\nExamples\n\njulia> effects = SimulatedEffects();\n\njulia> typeof(hash(effects))\nUInt64\n\n\n\n\n\n","category":"method"},{"location":"#Base.hash-Tuple{TEBV, UInt64}","page":"GenomicBreeding","title":"Base.hash","text":"Base.hash(x::TEBV, h::UInt)::UInt\n\nHash a TEBV struct using the traits, formualae and dfTEBVs. We deliberately excluded the models, dfBLUEs, and df_BLUPs for efficiency.\n\nExamples\n\njulia> tebv = TEBV(traits=[\"\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> typeof(hash(tebv))\nUInt64\n\n\n\n\n\n","category":"method"},{"location":"#Base.hash-Tuple{Trials, UInt64}","page":"GenomicBreeding","title":"Base.hash","text":"Base.hash(x::Trials, h::UInt)::UInt\n\nHash a Trials struct.\n\nExamples\n\njulia> trials = Trials(n=2, t=2);\n\njulia> typeof(hash(trials))\nUInt64\n\n\n\n\n\n","category":"method"},{"location":"#Base.sum-Tuple{SimulatedEffects}","page":"GenomicBreeding","title":"Base.sum","text":"sum(effects::SimulatedEffects)::Tuple{Int64, Int64, Int64}\n\nSum up the simulated effects to generate the simulated phenotype values\n\nExamples\n\njulia> effects = SimulatedEffects();\n\njulia> sum(effects)\n1-element Vector{Float64}:\n 0.0\n\njulia> effects.additive_genetic[1] = pi;\n\njulia> sum(effects)\n1-element Vector{Float64}:\n 3.141592653589793\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.analyse-Tuple{Trials}","page":"GenomicBreeding","title":"GenomicBreeding.analyse","text":"Analyse trials\n\nArguments\n\ntrials: Trials struct \nmax_levels: maximum number of non-entry factor levels to include in the linear mixed models (default = 100)\nmax_time_per_model: maximum time in seconds for fitting each linear mixed model (default = 60)\nverbose: Show trials analysis progress bar? (default = true)\n\nOutputs\n\nTEBV struct containing the trait names, the best fitting formulae, models, BLUEs, and BLUPs for each trait\n\nExamples\n\njulia> trials, _simulated_effects = simulatetrials(genomes = simulategenomes(n=10, verbose=false), n_years=1, n_seasons=1, n_harvests=1, n_sites=1, n_replications=10, verbose=false);\n\njulia> tebv = analyse(trials, max_levels=50, verbose=false);\n\njulia> tebv.traits\n3-element Vector{String}:\n \"trait_1\"\n \"trait_2\"\n \"trait_3\"\n\njulia> checkdims(tebv)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.checkdims-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.checkdims","text":"checkdims(genomes::Genomes)::Bool\n\nCheck dimension compatibility of the fields of the Genomes struct\n\nExamples\n\njulia> genomes = Genomes(n=2,p=4);\n\njulia> checkdims(genomes)\nfalse\n\njulia> genomes.entries = [\"entry_1\", \"entry_2\"];\n\njulia> genomes.loci_alleles = [\"chr1\\t1\\tA|T\\tA\", \"chr1\\t2\\tC|G\\tG\", \"chr2\\t3\\tA|T\\tA\", \"chr2\\t4\\tG|T\\tG\"];\n\njulia> checkdims(genomes)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.checkdims-Tuple{Phenomes}","page":"GenomicBreeding","title":"GenomicBreeding.checkdims","text":"checkdims(y::Phenomes)::Bool\n\nCheck dimension compatibility of the fields of the Phenomes struct\n\nExamples\n\njulia> y = Phenomes(n=2, t=2);\n\njulia> checkdims(y)\nfalse\n\njulia> y.entries = [\"entry_1\", \"entry_2\"];\n\njulia> y.traits = [\"trait_1\", \"trait_2\"];\n\njulia> checkdims(y)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.checkdims-Tuple{SimulatedEffects}","page":"GenomicBreeding","title":"GenomicBreeding.checkdims","text":"checkdims(effects::SimulatedEffects)::Bool\n\nCheck dimension compatibility of the fields of the SimulatedEffects struct\n\nExamples\n\njulia> effects = SimulatedEffects();\n\njulia> checkdims(effects)\ntrue\n\njulia> effects.id = [\"beaking_change\"];\n\njulia> checkdims(effects)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.checkdims-Tuple{TEBV}","page":"GenomicBreeding","title":"GenomicBreeding.checkdims","text":"checkdims(y::TEBV)::Bool\n\nCheck dimension compatibility of the fields of the TEBV struct\n\nExamples\n\njulia> tebv = TEBV(traits=[\"\"], formulae=[\"\"], models=[MixedModel(@formula(y~1+(1|x)), DataFrame(y=1, x=1))], df_BLUEs=[DataFrame(x=1)], df_BLUPs=[DataFrame(x=1)], df_TEBVs=[DataFrame(x=1)]);\n\njulia> checkdims(tebv)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.checkdims-Tuple{Trials}","page":"GenomicBreeding","title":"GenomicBreeding.checkdims","text":"checkdims(trials::Trials)::Bool\n\nCheck dimension compatibility of the fields of the Trials struct\n\nExamples\n\njulia> trials = Trials(n=1, t=2);\n\njulia> trials.entries = [\"entry_1\"];\n\njulia> checkdims(trials)\ntrue\n\njulia> trials.entries = [\"entering_2_entries\", \"instead_of_just_1\"];\n\njulia> checkdims(trials)\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.countlevels-Tuple{DataFrames.DataFrame}","page":"GenomicBreeding","title":"GenomicBreeding.countlevels","text":"countlevels(df::DataFrame; column_names::Vector{String})::Int64\n\nCount the total number of factor levels across the column names provided.\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.dimensions-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.dimensions","text":"dimensions(genomes::Genomes)::Dict{String, Int64}\n\nCount the number of entries, populations, loci-alleles combination, loci, and maximum number of alleles per locus in the Genomes struct\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=1_000, n_alleles=4, verbose=false);\n\njulia> dimensions(genomes)\nDict{String, Int64} with 6 entries:\n  \"n_entries\"      => 100\n  \"n_chr\"          => 7\n  \"n_loci\"         => 1000\n  \"n_loci_alleles\" => 3000\n  \"n_populations\"  => 1\n  \"max_n_alleles\"  => 4\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.loci-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.loci","text":"loci(genomes::Genomes)::Tuple{Vector{String},Vector{Int64},Vector{Int64},Vector{Int64}}\n\nExtract chromosome names, positions, start and end indexes of each locus across loci\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=1_000, n_alleles=4, verbose=false);\n\njulia> chromsomes, positions, loci_ini_idx, loci_fin_idx = loci(genomes);\n\njulia> length(chromsomes), length(positions), length(loci_ini_idx), length(loci_fin_idx)\n(1000, 1000, 1000, 1000)\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.loci_alleles-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.loci_alleles","text":"loci_alleles(genomes::Genomes)::Tuple{Vector{String},Vector{Int64},Vector{String}}\n\nExtract chromosomes, positions, and alleles across loci-allele combinations\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=1_000, n_alleles=4, verbose=false);\n\njulia> chromsomes, positions, alleles = loci_alleles(genomes);\n\njulia> length(chromsomes), length(positions), length(alleles)\n(3000, 3000, 3000)\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.plot","page":"GenomicBreeding","title":"GenomicBreeding.plot","text":"plot(genomes::Genomes)::Nothing\n\nPlot allele frequencies\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=1_000, n_alleles=4, verbose=false);\n\njulia> GenomicBreeding.plot(genomes);\n\n\n\n\n\n\n","category":"function"},{"location":"#GenomicBreeding.readJLD2-Union{Tuple{Type{T}}, Tuple{T}, Tuple{Type{T}, String}} where T<:GenomicBreeding.AbstractGB","page":"GenomicBreeding","title":"GenomicBreeding.readJLD2","text":"readJLD2(type::Type, fname::String = missing)::Type\n\nLoad a core (Genomes, Phenomes, and Trials), simulation (SimulatedEffects), and model (TEBV) struct from a JLD2 file.\n\nExamples\n\njulia> genomes = simulategenomes(n=2, verbose=false);\n\njulia> fname = writeJLD2(genomes);\n\njulia> readJLD2(Genomes, fname) == genomes\ntrue\n\njulia> phenomes = Phenomes(n=2, t=2); phenomes.entries = [\"entry_1\", \"entry_2\"]; phenomes.traits = [\"trait_1\", \"trait_2\"];\n\njulia> fname = writeJLD2(phenomes);\n\njulia> readJLD2(Phenomes, fname) == phenomes\ntrue\n\njulia> trials = Trials(n=1, t=2); trials.entries = [\"entry_1\"];\n\njulia> fname = writeJLD2(trials);\n\njulia> readJLD2(Trials, fname) == trials\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.readdelimited-Tuple{Type{Genomes}}","page":"GenomicBreeding","title":"GenomicBreeding.readdelimited","text":"readdelimited(type::Type{Genomes}; fname::String, sep::String = \"\\t\")::Genomes\n\nLoad a Genomes struct from a string-delimited (default=\\t) file.  Each row corresponds to a locus-allele combination. The first 4 columns correspond to the chromosome, position, all alleles in the locus (delimited by |), and the specific allele. The subsequency columns refer to the samples, pools, entries or genotypes.\n\nExamples\n\njulia> genomes = simulategenomes(n=10, verbose=false);\n\njulia> fname = writedelimited(genomes);\n\njulia> genomes_reloaded = readdelimited(Genomes, fname=fname);\n\njulia> genomes == genomes_reloaded\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.simulateeffects-Tuple{}","page":"GenomicBreeding","title":"GenomicBreeding.simulateeffects","text":"Simulate effects\n\nSample p x q effects from a multivariate normal distribution with μ~Exp(λ) and Σ=μμ'\n\nArguments\n\np: number of correlated effects to simulate (default = 2)\nq: number times to simulate the correlated effects from the same distribution (default = 1)\nλ: parameter of the exponential distritbution from which the means will be sampled from (default = 1.00)\nseed: randomisation seed (default = 42)\n\nOutput\n\np x q matrix of correlated effects\n\nExamples\n\njulia> θ::Matrix{Float64} = simulateeffects();\n\njulia> sum(abs.(θ - [-0.0886501800782904; -0.596478483888422])) < 0.00001\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.simulategenomes-Tuple{}","page":"GenomicBreeding","title":"GenomicBreeding.simulategenomes","text":"Simulate genomes\n\nArguments\n\nn: number of entries (default = 100)\nl: number of loci (default = 10_000)\nn_chroms: number of chromosomes (default = 7)\nn_alleles: number of alleles per locus (default = 2)\nmax_pos: total length of the genome in base-pairs (bp) (default = 135000000)\nld_corr_50perc_kb: distance in bp at which linkage expressed as correlation between a pair of loci is at 50% (default = 1_000)\nμ_β_params: the shape parameters of the Beta distribution from which the mean allele frequencies will be sampled  (default = (0.5, 0.5); U-shaped distribution; you may use (2.0, 2.0) for a bell-shaped distribution)\nsparsity: Proportion of missing data (default = 0.0)\nseed: psuedo-random number generator seed for replicability (default = 42)\nverbose: Show progress bar and plot the linkage heatmap into an svg file? (default = true)\n\nOutput\n\nGenomes\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=10_000, n_alleles=3, verbose=false);\n\njulia> length(genomes.entries)\n100\n\njulia> length(genomes.populations)\n100\n\njulia> length(genomes.loci_alleles)\n20000\n\njulia> size(genomes.allele_frequencies)\n(100, 20000)\n\njulia> mean(ismissing.(genomes.allele_frequencies))\n0.0\n\njulia> rng::TaskLocalRNG = Random.seed!(123);\n\njulia> idx = StatsBase.sample(rng, range(1, 20_000, step=2), 250, replace = false, ordered = true);\n\njulia> correlations = StatsBase.cor(genomes.allele_frequencies[:, idx]);\n\njulia> correlations[10,10] == 1.00\ntrue\n\njulia> correlations[10,10] > correlations[10,250]\ntrue\n\njulia> genomes = simulategenomes(n=100, l=10_000, n_alleles=3, sparsity=0.25, verbose=false);\n\njulia> mean(ismissing.(genomes.allele_frequencies))\n0.25\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.simulategenomiceffects-Tuple{}","page":"GenomicBreeding","title":"GenomicBreeding.simulategenomiceffects","text":"Simulate genomic effects\n\nSimulate additive, dominance, and epistatic effects\n\nArguments\n\ngenomes: Genome struct includes the n entries x p loci-alleles combinations (p = l loci x a-1 alleles)\nf_additive: proportion of the l loci with non-zero additive effects on the phenotype\nf_dominance: proportion of the l*f_additive additive effects loci with additional dominance effects\nf_epistasis: proportion of the l*f_additive additive effects loci with additional epistasis effects\n\nOutputs\n\nn x 3 matrix of additive, dominance and epistasis effects per entry\np x 3 matrix of additive, dominance and epistasis effects per locus-allele combination\n\nExamples\n\njulia> genomes::Genomes = simulategenomes(n=100, l=2_000, n_alleles=3, verbose=false);\n\njulia> G, B = simulategenomiceffects(genomes=genomes, f_additive=0.05, f_dominance=0.75, f_epistasis=0.25);\n\njulia> size.([G, B])\n2-element Vector{Tuple{Int64, Int64}}:\n (100, 3)\n (4000, 3)\n\njulia> sum(B .!= 0.0, dims=1)\n1×3 Matrix{Int64}:\n 200  75  50\n\nDetails\n\nThe additive, dominance, and epistasis allele effects share a common exponential distribution (λ=1) from which  the mean of the effects (μ) are sampled, and the covariance matrix is derived (Σ = μ * μ';  where if det(Σ)≈0 then we iteratively add 1.00 to the diagonals until it becomes invertible or 10 iterations  finishes and throws an error). The non-additive or epistasis allele effects were simulated by multiplying the allele  frequencies of all possible unique pairs of epistasis alleles and their effects.\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.simulatetrials-Tuple{}","page":"GenomicBreeding","title":"GenomicBreeding.simulatetrials","text":"Simulate trials\n\nArguments\n\ngenomes: Genome struct includes the n entries x p loci-alleles combinations (p = l loci x a-1 alleles)\nf_add_dom_epi: n_traits x 3 numeric matrix of loci proportion with additive, dominance and epistasis effects, i.e. each column refers to:\nf_additive: proportion of the l loci with non-zero additive effects on the phenotype\nf_dominance: proportion of the l*f_additive additive effects loci with additional dominance effects\nf_epistasis: proportion of the l*f_additive additive effects loci with additional epistasis effects\nn_years: Number of years (default = 2)\nn_seasons: Number of seasons (default = 4)\nn_harvests: Number of harvests (default = 2)\nn_sites: Number of sites (default = 4)\nn_replications: Number of replications (default = 2)\nn_blocks: Number of blocks across the entire field layout (default = missing)\nn_rows: Number of rows across the entire field layout (default = missing)\nn_cols: Number of columns across the entire field layout (default = missing)\nproportion_of_variance: 9 x n_traits numeric matrix of scaled/non-scaled proportion of variances allocated to   genetic and environmental effects (default = missing; values will be sampled from a uniform distribution  followed by a biased sample on the first row, i.e. additive effects row).  The rows correspond to the variance allocated to:\nadditive genetic effects\ndominance genetic effects\nepistasis genetic effects\nyears effects\nseasons effects\nsites effects\nenvironmental interactions\nspatial interactions\nGxE interactiions\nseed: Randomisation seed (default = 42)\nsparsity: Proportion of missing data (default = 0.0)\nverbose: Show trials simulation progress bar? (default = true)\n\nOutputs\n\nTrials struct of simulated phenotype data\nVector of SimulatedEffects each corresponding to each trait-year-season-harvest-site-replication combination\n\nExamples\n\njulia> genomes::Genomes = simulategenomes(n=100, l=2_000, n_alleles=3, verbose=false);\n\njulia> trials::Trials, vector_of_effects::Array{SimulatedEffects,1} = simulatetrials(genomes=genomes, sparsity=0.25, verbose=false);\n\njulia> size(trials.phenotypes)\n(12800, 3)\n\njulia> size(trials.traits)\n(3,)\n\njulia> unique(trials.entries) == genomes.entries\ntrue\n\njulia> unique(trials.populations) == unique(genomes.populations)\ntrue\n\njulia> abs(mean(ismissing.(trials.phenotypes)) - 0.25) < 0.00001\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.slice-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.slice","text":"slice(genomes::Genomes;idx_entries::Vector{Int64},idx_loci_alleles::Vector{Int64})::Genomes\n\nCount the number of entries, populations, loci, and maximum number of alleles per locus in the Genomes struct\n\nExamples\n\njulia> genomes = simulategenomes(n=100, l=1_000, n_alleles=4, verbose=false);\n\njulia> sliced_genomes = slice(genomes, idx_entries=collect(1:10); idx_loci_alleles=collect(1:300));\n\njulia> dimensions(sliced_genomes)\nDict{String, Int64} with 6 entries:\n  \"n_entries\"      => 10\n  \"n_chr\"          => 1\n  \"n_loci\"         => 100\n  \"n_loci_alleles\" => 300\n  \"n_populations\"  => 1\n  \"max_n_alleles\"  => 4\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.trialsmodelsfomulae!-Tuple{DataFrames.DataFrame}","page":"GenomicBreeding","title":"GenomicBreeding.trialsmodelsfomulae!","text":"trialsmodelsfomulae!(df::DataFrame; trait::String, max_levels::Int64 = 100)::Vector{String}\n\nDefine formulae for the mixed models to fit on the tabularised Trials struct.     - appends interaction effects intto df     - returns:         + a vector of formulae as strings         + a vector of the total number of non-entry factor levels\n\nExamples\n\njulia> trials, _simulated_effects = simulatetrials(genomes = simulategenomes(verbose=false), verbose=false);\n\njulia> df = tabularise(trials);\n\njulia> size(df)\n(12800, 14)\n\njulia> formulae, n_levels = trialsmodelsfomulae!(df, trait=\"trait_1\");\n\njulia> size(df)\n(12800, 134)\n\njulia> length(formulae)\n76\n\njulia> sum(n_levels .== sort(n_levels))\n76\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.writeJLD2-Tuple{GenomicBreeding.AbstractGB}","page":"GenomicBreeding","title":"GenomicBreeding.writeJLD2","text":"writeJLD2(A::Union{Genomes,Phenomes,Trials,SimulatedEffects}; fname::Union{Missing,String} = missing)::String\n\nSave core (Genomes, Phenomes, and Trials), simulation (SimulatedEffects), and model (TEBV) structs as JLD2,  a heirarchical data format version 5 (HDF5) - compatible format. Note that the extension name should be '.jld2'.\n\nExamples\n\njulia> genomes = simulategenomes(n=2, verbose=false);\n\njulia> writeJLD2(genomes, fname=\"test_genomes.jld2\")\n\"test_genomes.jld2\"\n\njulia> load(\"test_genomes.jld2\")[\"Genomes\"] == genomes\ntrue\n\njulia> phenomes = Phenomes(n=2, t=2); phenomes.entries = [\"entry_1\", \"entry_2\"]; phenomes.traits = [\"trait_1\", \"trait_2\"];\n\njulia> writeJLD2(phenomes, fname=\"test_phenomes.jld2\")\n\"test_phenomes.jld2\"\n\njulia> load(\"test_phenomes.jld2\")[\"Phenomes\"] == phenomes\ntrue\n\njulia> trials = Trials(n=1, t=2); trials.entries = [\"entry_1\"];\n\njulia> writeJLD2(trials, fname=\"test_trials.jld2\")\n\"test_trials.jld2\"\n\njulia> load(\"test_trials.jld2\")[\"Trials\"] == trials\ntrue\n\njulia> simulated_effects = SimulatedEffects();\n\njulia> writeJLD2(simulated_effects, fname=\"test_simulated_effects.jld2\")\n\"test_simulated_effects.jld2\"\n\njulia> load(\"test_simulated_effects.jld2\")[\"SimulatedEffects\"] == simulated_effects\ntrue\n\njulia> trials, _simulated_effects = simulatetrials(genomes = simulategenomes(n=10, verbose=false), n_years=1, n_seasons=1, n_harvests=1, n_sites=1, n_replications=10, verbose=false);\n\njulia> tebv = analyse(trials, max_levels=50, verbose=false);\n\njulia> writeJLD2(tebv, fname=\"test_tebv.jld2\")\n\"test_tebv.jld2\"\n\njulia> load(\"test_tebv.jld2\")[\"TEBV\"] == tebv\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.writedelimited-Tuple{Genomes}","page":"GenomicBreeding","title":"GenomicBreeding.writedelimited","text":"writedelimited(genomes::Genomes, sep::String = \"\t\", fname::Union{Missing,String} = missing)::String\n\nSave Genomes struct as a string-delimited (default=) file. Each row corresponds to a locus-allele combination. The first 4 columns correspond to the chromosome, position, all alleles in the locus (delimited by |), and the specific allele. The subsequency columns refer to the samples, pools, entries or genotypes.\n\nNotes:\n\nExtension name should be '.tsv', '.csv', or '.txt'.\nHeader lines and comments are prefixed by '#'.\nThere are 2 header lines prefixed by '#', e.g.:\nheader line 1: \"chrom,pos,allalleles,allele,entry1,entry_2\"\nheader line 2: \"chrom,pos,allalleles,allele,population1,population_1\"\n\nExamples\n\njulia> genomes = simulategenomes(n=2, verbose=false);\n\njulia> writedelimited(genomes, fname=\"test_genomes.tsv\")\n\"test_genomes.tsv\"\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.writedelimited-Tuple{Phenomes}","page":"GenomicBreeding","title":"GenomicBreeding.writedelimited","text":"writedelimited(phenomes::Phenomes, sep::String = \"\t\", fname::Union{Missing,String} = missing)::String\n\nSave Phenomes struct as a string-delimited (default=) file.  Each row corresponds to a samples, pools, entries or genotypes. The first 2 columns correspond to the entry and population names. The subsequency columns refer to the traits containing the phenotype values of each entry. Note that the extension name should be '.tsv', '.csv', or '.txt'.\n\nNotes:\n\nExtension name should be '.tsv', '.csv', or '.txt'.\nHeader line and comments are prefixed by '#'.\nThere is 1 header line prefixed by '#', e.g.: \"entry,population,trait1,trait2,trait_3\"\n\nExamples\n\njulia> phenomes = Phenomes(n=2, t=2); phenomes.entries = [\"entry_1\", \"entry_2\"]; phenomes.traits = [\"trait_1\", \"trait_2\"];\n\njulia> writedelimited(phenomes, fname=\"test_phenomes.tsv\")\n\"test_phenomes.tsv\"\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.writedelimited-Tuple{Trials}","page":"GenomicBreeding","title":"GenomicBreeding.writedelimited","text":"writedelimited(trials::Trials, sep::String = \"\t\", fname::Union{Missing,String} = missing)::String\n\nSave Trials struct as a string-delimited (default=) file.  Each row corresponds to a samples, pools, entries or genotypes. The first 10 columns correspond to:\n\nyears\nseasons\nharvests\nsites\nentries\npopulations\nreplications\nblocks\nrows\ncols \n\nThe subsequency columns refer to the traits containing the phenotype values.\n\nNotes:\n\nExtension name should be '.tsv', '.csv', or '.txt'.\nHeader line and comments are prefixed by '#'.\nThere is 1 header line prefixed by '#', e.g.: \"years,seasons,harvests, ..., trait1,tratit2,trait_3\"\n\nExamples\n\njulia> trials = Trials(n=1, t=2); trials.years = [\"year_1\"]; trials.seasons = [\"season_1\"]; trials.harvests = [\"harvest_1\"]; trials.sites = [\"site_1\"]; trials.entries = [\"entry_1\"]; trials.populations = [\"population_1\"]; trials.replications = [\"replication_1\"]; trials.blocks = [\"block_1\"]; trials.rows = [\"row_1\"]; trials.cols = [\"col_1\"]; trials.traits = [\"trait_1\", \"trait_2\"];\n\njulia> writedelimited(trials, fname=\"test_trials.tsv\")\n\"test_trials.tsv\"\n\n\n\n\n\n","category":"method"},{"location":"#GenomicBreeding.@string2formula-Tuple{Any}","page":"GenomicBreeding","title":"GenomicBreeding.@string2formula","text":"string2formula(x)\n\nMacro to Meta.parse a string into a formula.\n\n\n\n\n\n","category":"macro"},{"location":"simulations/","page":"Simulation","title":"Simulation","text":"CurrentModule = GenomicBreeding","category":"page"},{"location":"simulations/#Simulation","page":"Simulation","title":"Simulation","text":"","category":"section"},{"location":"simulations/","page":"Simulation","title":"Simulation","text":"Simulations","category":"page"},{"location":"simulations/","page":"Simulation","title":"Simulation","text":"","category":"page"},{"location":"simulations/#Simulate-genomes","page":"Simulation","title":"Simulate genomes","text":"","category":"section"},{"location":"simulations/#Simulate-effects","page":"Simulation","title":"Simulate effects","text":"","category":"section"},{"location":"simulations/#Simulate-trials","page":"Simulation","title":"Simulate trials","text":"","category":"section"}]
}
