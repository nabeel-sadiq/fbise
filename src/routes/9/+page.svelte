<script>
  import Card from "$lib/components/custom/Card.svelte";

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

<div class="sm:px-8 px-4 flex justify-center items-center gap-8 flex-wrap">
  <Card class="9th" type="Theory" subject="Urdu" link={theoryLinks[0]} />
  <Card class="9th" type="Theory" subject="English" link={theoryLinks[1]} />
  <Card class="9th" type="Theory" subject="Islamiyat" link={theoryLinks[2]} />
  <Card class="9th" type="Theory" subject="Pk. St." link={theoryLinks[3]} />
  <Card class="9th" type="Theory" subject="Chemistry" link={theoryLinks[4]} />
  <Card class="9th" type="Theory" subject="Biology" link={theoryLinks[5]} />
  <Card class="9th" type="Theory" subject="Physics" link={theoryLinks[6]} />
  <Card class="9th" type="Theory" subject="Computer" link={theoryLinks[7]} />
  <Card class="9th" type="Theory" subject="Maths" link={theoryLinks[8]} />
</div>
