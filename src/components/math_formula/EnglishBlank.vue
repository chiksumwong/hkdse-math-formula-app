<template>
  <Page class="page">
    <ActionBar class="action-bar" title="English Blank Version">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Label text="This is Chinese Version Page" class="h1"/>
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>

  export default {
    
  };
</script>
