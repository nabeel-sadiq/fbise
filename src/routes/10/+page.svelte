<script>
  import Card from "$lib/components/custom/Card.svelte";

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

  // practicals
  const practicalLinks = [
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Chemistry%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20Biology%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Physics%20SSC-II.pdf#page=3",
    "https://fbise.edu.pk/ModelPaper/2025/Practical%20Based%20Assessment/Final%20Model%20Quesiton%20Paper%20PBA%20%20Computer%20Science%20SSC-II.pdf#page=3",
  ];
</script>

<div class="sm:px-8 px-4 flex justify-center items-center gap-8 flex-wrap">
  <Card class="10th" type="Theory" subject="Urdu" link={theoryLinks[0]} />
  <Card class="10th" type="Theory" subject="English" link={theoryLinks[1]} />
  <Card class="10th" type="Theory" subject="Islamiyat" link={theoryLinks[2]} />
  <Card class="10th" type="Theory" subject="Pk. St." link={theoryLinks[3]} />
  <Card class="10th" type="Theory" subject="Chemistry" link={theoryLinks[4]} />
  <Card class="10th" type="Theory" subject="Biology" link={theoryLinks[5]} />
  <Card class="10th" type="Theory" subject="Physics" link={theoryLinks[6]} />
  <Card class="10th" type="Theory" subject="Computer" link={theoryLinks[7]} />
  <Card class="10th" type="Theory" subject="Maths" link={theoryLinks[8]} />
</div>

<!-- practicals -->
<div class="sm:px-8 px-4 flex justify-center items-center gap-8 flex-wrap mt-10 border-t-[1px] border-t-slate-600 py-10">
  <Card class="10th" type="Practical" subject="Chemistry" link={practicalLinks[0]} />
  <Card class="10th" type="Practical" subject="Biology" link={practicalLinks[1]} />
  <Card class="10th" type="Practical" subject="Physics" link={practicalLinks[2]} />
  <Card class="10th" type="Practical" subject="Computer" link={practicalLinks[3]} />
</div>
