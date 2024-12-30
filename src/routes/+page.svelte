<script>
  import Card from "$lib/components/custom/Card.svelte";

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

<div class="sm:px-8 px-4 flex justify-center items-center gap-8 flex-wrap">
  <Card class="11th" type="Theory" subject="Urdu" link={theoryLinks[0]} />
  <Card class="11th" type="Theory" subject="English" link={theoryLinks[1]} />
  <Card class="11th" type="Theory" subject="Islamiyat" link={theoryLinks[2]} />
  <Card class="11th" type="Theory" subject="Chemistry" link={theoryLinks[3]} />
  <Card class="11th" type="Theory" subject="Biology" link={theoryLinks[4]} />
  <Card class="11th" type="Theory" subject="Physics" link={theoryLinks[5]} />
  <Card class="11th" type="Theory" subject="Computer" link={theoryLinks[6]} />
  <Card class="11th" type="Theory" subject="Maths" link={theoryLinks[7]} />
</div>