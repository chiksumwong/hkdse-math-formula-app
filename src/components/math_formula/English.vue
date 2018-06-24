<template>
  <Page class="page">
    <ActionBar class="action-bar" title="English Version">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <h1>this is chinese page</h1>
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>

  export default {
    
  };
</script>
