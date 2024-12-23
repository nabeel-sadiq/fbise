<script>
  let props = $props();
</script>

<div class="card bg-base-200 text-base-content sm:w-96 w-80 shadow-xl border-[1px] border-primary">
  <div class="card-body">
    <h2 class="card-title">{ props.title }</h2>
    <p class="capitalize">{ props.description }</p>
    <div class="card-actions justify-end mt-4">
      <a href={ props.link } class="btn btn-primary">Download</a >
    </div>
  </div>
</div>