<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import Card from "../../components/Card.svelte";
  import Select from "../../components/Select.svelte";
  import Footer from "../../components/Footer.svelte";
  import Downbar from "../../components/Downbar.svelte";

  const theoryLinks = [
    "https://fbise.edu.pk/ModelPaper/2024New/urdu/Final%20HSSC-II%20Model%20Paper%20Urdu.pdf#page=4",
    "https://fbise.edu.pk/ModelPaper/2024New/english/Final_English%20HSSC-II_merged.pdf#page=13",
    "https://fbise.edu.pk/ModelPaper/2024New/pst/Final%20HSSC-II%20Pakistan%20Studies%20Model%20Paper.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/chemistry/Final%20HSSC-II%20Chemistry%20Model%20paper%20Merged.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/bio/Final%20HSSC-II%20Biology%20Model%20paper.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/physics/Final%20Model%20paper%20Physics%20HSSC-II%20revised.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/computer/Final%20HSSC-II%20Model%20Paper%20Computer%20Science.pdf",
    "https://fbise.edu.pk/ModelPaper/2024New/maths/Notification%20-%20Maths%20Model%20Question%20Paper%20HSSC-II%20(2006).pdf#page=2",
  ];

  const practicalLinks = [
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Chemistry%20HSSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Biology%20HSSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Physics%20HSSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Computer%20Science%20HSSC-II.pdf#page=3",
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
    title="12th Urdu Theory"
    description="12th urdu theory model paper"
    link={theoryLinks[0]}
  />
  <Card
    title="12th English Theory"
    description="12th english theory model paper"
    link={theoryLinks[1]}
  />
  <Card
    title="12th Pak. Studies Theory"
    description="12th pak.st theory model paper"
    link={theoryLinks[2]}
  />
  <Card
    title="12th Chemistry Theory"
    description="12th chemistry theory model paper"
    link={theoryLinks[3]}
  />
  <Card
    title="12th Biology Theory"
    description="12th biology theory model paper"
    link={theoryLinks[4]}
  />
  <Card
    title="12th Physics Theory"
    description="12th physics theory model paper"
    link={theoryLinks[5]}
  />
  <Card
    title="12th Computer Theory"
    description="12th computer theory model paper"
    link={theoryLinks[6]}
  />
  <Card
    title="12th Maths Theory"
    description="12th maths theory model paper"
    link={theoryLinks[7]}
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
    title="12th Chemistry Practical"
    description="12th chemistry practical model paper"
    link={practicalLinks[0]}
  />
  <Card
    title="12th Biology Practical"
    description="12th biology practical model paper"
    link={practicalLinks[1]}
  />
  <Card
    title="12th Physics Practical"
    description="12th physics practical model paper"
    link={practicalLinks[2]}
  />
  <Card
    title="12th Computer Practical"
    description="12th computer practical model paper"
    link={practicalLinks[3]}
  />
</div>

<Footer />
