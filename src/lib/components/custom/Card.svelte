<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  let props = $props();
</script>

<Card.Root class="w-[350px] conthing bg-black border-slate-600">
  <Card.Header>
    <Card.Title class="text-xl">{props.class} {props.subject} {props.type}</Card.Title>
    <Card.Description class="text-slate-400"
      >{props.class} {props.subject} {props.type} Model Paper</Card.Description
    >
  </Card.Header>
  <Card.Content></Card.Content>
  <Card.Footer class="flex justify-end">
    <Button href={props.link} variant="secondary">Download</Button>
  </Card.Footer>
</Card.Root>

<style>
.conthing {
  font-family: "Geist Mono", sans-serif;
}
</style>
