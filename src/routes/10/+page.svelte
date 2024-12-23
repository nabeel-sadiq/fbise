<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import Card from "../../components/Card.svelte";
  import Select from "../../components/Select.svelte";
  import Footer from "../../components/Footer.svelte";
  import Downbar from "../../components/Downbar.svelte";

  const theoryLinks = [
    "https://fbise.edu.pk/ModelPaper/2024New/urdu/Final%20SSC-II%20Model%20Paper%20Urdu.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2024New/english/Final_English%20SSC-II_merged.pdf#page=13",
    "https://fbise.edu.pk/ModelPaper/2024New/islamiyat/Islamiyat%20Model%20Paper%20SSC-II%20(SNC%202022)%20Final.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/pst/Final%20SSC-II%20Pakistan%20Studies%20Model%20Paper.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/chemistry/Final%20SSC-II%20Chemistry%20Model%20Paper.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/bio/Final%20SSC-II%20Biology%20Model%20paper.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/physics/Final%20Model%20Paper%20Physics%20SSC-II%20revised.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/computer/SSC-II%20Final%20Model%20Paper%20Computer%20Science.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/maths/Final%20SSC-II%20Mathematics%20Science%20Model%20Paper.pdf",
  ];

  const practicalLinks = [
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Chemistry%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Biology%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Physics%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Computer%20Science%20SSC-II.pdf#page=3",
  ];
</script>

<span class="inline-flex sm:hidden"><Downbar /></span>
<span class="sm:inline-flex hidden"><Sidebar /></span>
<Select />
<h1
  class="text-base-content text-3xl sm:ml-32 font-bold sm:text-left text-center mt-4"
>
  📚 Theory
</h1>
<div
  class="flex gap-6 flex-wrap sm:justify-start justify-center items-center py-12 sm:px-32 px-12"
>
  <Card
    title="10th Urdu Theory"
    description="10th urdu theory model paper"
    link={theoryLinks[0]}
  />
  <Card
    title="10th English Theory"
    description="10th english theory model paper"
    link={theoryLinks[1]}
  />
  <Card
    title="10th Islamiyat Theory"
    description="10th islamiyat theory model paper"
    link={theoryLinks[2]}
  />
  <Card
    title="10th Pak. Studies Theory"
    description="10th pak.st theory model paper"
    link={theoryLinks[3]}
  />
  <Card
    title="10th Chemistry Theory"
    description="10th chemistry theory model paper"
    link={theoryLinks[4]}
  />
  <Card
    title="10th Biology Theory"
    description="10th biology theory model paper"
    link={theoryLinks[5]}
  />
  <Card
    title="10th Physics Theory"
    description="10th physics theory model paper"
    link={theoryLinks[6]}
  />
  <Card
    title="10th Computer Theory"
    description="10th computer theory model paper"
    link={theoryLinks[7]}
  />
  <Card
    title="10th Maths Theory"
    description="10th maths theory model paper"
    link={theoryLinks[8]}
  />
</div>

<h1
  class="text-base-content text-3xl sm:ml-32 font-bold sm:text-left text-center mt-4"
>
  🧪 Practical (PBA)
</h1>

<div
  class="flex gap-6 flex-wrap sm:justify-start justify-center items-center py-12 sm:px-32 px-12"
>
  <Card
    title="10th Chemistry Practical"
    description="10th chemistry practical model paper"
    link={practicalLinks[0]}
  />
  <Card
    title="10th Biology Practical"
    description="10th biology practical model paper"
    link={practicalLinks[1]}
  />
  <Card
    title="10th Physics Practical"
    description="10th physics practical model paper"
    link={practicalLinks[2]}
  />
  <Card
    title="10th Computer Practical"
    description="10th computer practical model paper"
    link={practicalLinks[3]}
  />
</div>

<Footer />
