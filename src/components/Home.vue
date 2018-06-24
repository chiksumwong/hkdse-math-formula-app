<template>
  <Page class="page">
    <ActionBar class="action-bar" title="HKDSE MATH FORMULA"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>

      <Button class="btn btn-primary" @tap="$router.push('/chinese')">中文版</Button>
      <Button class="btn btn-primary" @tap="$router.push('/chinese_blank')">中文空白版</Button>
      <Button class="btn btn-primary" @tap="$router.push('/english')">English Version</Button>
      <Button class="btn btn-primary" @tap="$router.push('/english_blank')">English Blank Version</Button>
    </StackLayout>

  </Page>
</template>
