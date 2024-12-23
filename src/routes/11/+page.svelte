<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import Card from "../../components/Card.svelte";
  import Select from "../../components/Select.svelte";
  import Footer from "../../components/Footer.svelte";
  import Downbar from "../../components/Downbar.svelte";

  const theoryLinks = [
    "https://fbise.edu.pk/ModelPaper/2024New/urdu/Final_Assessment_Framework_Model_Question_Paper_Urdu_HSSC-I.pdf#page=19",
    "https://fbise.edu.pk/ModelPaper/2024New/english/Final_Assessment_Framework_Model_Question_Paper_English_HSSC-I%20(2).pdf#page=31",
    "https://fbise.edu.pk/ModelPaper/2024New/islamiyat/Final_Assessment_Framework_Model_Question_Paper_Islamiyat_HSSC-I.pdf#page=11",
    "https://fbise.edu.pk/ModelPaper/2024New/chemistry/Final_Assessment_Framework_Model_Question_Paper_Chemistry_HSSC-I.pdf#page=39",
    "https://fbise.edu.pk/ModelPaper/2024New/bio/Final_Assessment_Framework_Model_Question_Paper_Biology_HSSC-I.pdf#page=40",
    "https://fbise.edu.pk/ModelPaper/2024New/physics/Final_Assessment_Framework_Model_Question_Paper_Physics_HSSC-I.pdf#page=27",
    "https://fbise.edu.pk/ModelPaper/2024New/computer/Final_Assessment_Framework_Model_Question_Paper_ComputetScience_HSSC-I.pdf#page=24",
    "https://fbise.edu.pk/ModelPaper/2024New/maths/Final_Assessment_Framework_Model_Question_Paper_Mathematics_HSSC-I_.pdf#page=18",
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
    title="11th Urdu Theory"
    description="11th urdu theory model paper"
    link={theoryLinks[0]}
  />
  <Card
    title="11th English Theory"
    description="11th english theory model paper"
    link={theoryLinks[1]}
  />
  <Card
    title="11th Islamiyat Theory"
    description="11th islamiyat theory model paper"
    link={theoryLinks[2]}
  />
  <Card
    title="11th Chemistry Theory"
    description="11th chemistry theory model paper"
    link={theoryLinks[3]}
  />
  <Card
    title="11th Biology Theory"
    description="11th biology theory model paper"
    link={theoryLinks[4]}
  />
  <Card
    title="11th Physics Theory"
    description="11th physics theory model paper"
    link={theoryLinks[5]}
  />
  <Card
    title="11th Computer Theory"
    description="11th computer theory model paper"
    link={theoryLinks[6]}
  />
  <Card
    title="11th Maths Theory"
    description="11th maths theory model paper"
    link={theoryLinks[7]}
  />
</div>

<Footer />
