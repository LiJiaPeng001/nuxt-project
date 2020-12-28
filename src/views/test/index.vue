  <template>
  <div class="test">
    <div class="title">test</div>
  </div>
</template>
  
<script>
import $login from '@/utils/$login';

export default {
  mounted() {
    console.log(this.$store, 'ss');
    $login();
  },
};
</script>
  
  <style>
</style>