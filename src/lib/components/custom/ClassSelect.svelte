<script>
  import * as Select from "$lib/components/ui/select/index.js";

  const grades = [
    { value: "9", label: "9th Class" },
    { value: "10", label: "10th Class" },
    { value: "", label: "11th Class" },
    { value: "12", label: "12th Class" },
  ];
</script>

<Select.Root>
  <Select.Trigger class="w-[180px] border-[1px] border-slate-700">
    <Select.Value placeholder="Pick your class" />
  </Select.Trigger>
  <Select.Content class="bg-black text-white border-[1px] border-slate-700">
    <Select.Group>
      <Select.Label>👇</Select.Label>
      {#each grades as grade}
        <a href={`/${grade.value}`}>
          <Select.Item value={grade.value} label={grade.label}
            >{grade.label}</Select.Item
          >
        </a>
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="grade" />
</Select.Root>
