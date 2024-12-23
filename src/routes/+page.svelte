<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Card from "../components/Card.svelte";
  import Select from "../components/Select.svelte";
  import Footer from "../components/Footer.svelte";
  import Downbar from "../components/Downbar.svelte";

  const theoryLinks = [
    "https://fbise.edu.pk/ModelPaper/2024New/urdu/Final_Assessment_Framework_Model_Question_Paper_Urdu_SSC-I.pdf#page=19",

    "https://fbise.edu.pk/ModelPaper/2024New/english/Final_Assessment_Framework_Model_Question_Paper_English_SSC-I.pdf#page=30",

    "https://fbise.edu.pk/ModelPaper/2024New/islamiyat/Islamiyat%20Model%20Paper%20SSC-I%20(SNC%202022)%20Final.pdf",

    "https://fbise.edu.pk/ModelPaper/2024New/pst/Final_Assessment_Framework_Model_Question_Paper_PakistanStudies_SSC-I.pdf#page=15",

    "https://fbise.edu.pk/ModelPaper/2024New/chemistry/Final_Assessment_Framework_Model_Question_Paper_Chemistry_SSC-I%20Latest.pdf#page=30",

    "https://fbise.edu.pk/ModelPaper/2024New/bio/Final_Assessment_Framework_Model_Question_Paper_Biology_SSC-I.pdf#page=21",

    "https://fbise.edu.pk/ModelPaper/2024New/physics/Final_Assessment_Framework_Model_Question_Paper_Physics_SSC-I.pdf#page=28",

    "https://fbise.edu.pk/ModelPaper/2024New/computer/Final_Assessment_Framework_Model_Question_Paper_ComputerScience_SSC-I.pdf#page=25",

    "https://fbise.edu.pk/ModelPaper/2024New/maths/Final_Assessment_Framework_Model_Question_Paper_Mathematics_SSC-I.pdf#page=17",
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
    title="9th Urdu Theory"
    description="9th urdu theory model paper"
    link={theoryLinks[0]}
  />
  <Card
    title="9th English Theory"
    description="9th english theory model paper"
    link={theoryLinks[1]}
  />
  <Card
    title="9th Islamiyat Theory"
    description="9th islamiyat theory model paper"
    link={theoryLinks[2]}
  />
  <Card
    title="9th Pak. Studies Theory"
    description="9th pak.st theory model paper"
    link={theoryLinks[3]}
  />
  <Card
    title="9th Chemistry Theory"
    description="9th chemistry theory model paper"
    link={theoryLinks[4]}
  />
  <Card
    title="9th Biology Theory"
    description="9th biology theory model paper"
    link={theoryLinks[5]}
  />
  <Card
    title="9th Physics Theory"
    description="9th physics theory model paper"
    link={theoryLinks[6]}
  />
  <Card
    title="9th Computer Theory"
    description="9th computer theory model paper"
    link={theoryLinks[7]}
  />
  <Card
    title="9th Maths Theory"
    description="9th maths theory model paper"
    link={theoryLinks[8]}
  />
</div>

<Footer />
