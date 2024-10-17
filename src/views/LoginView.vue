<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { BrowserOAuthClient } from '@atproto/oauth-client-browser'

const client = new BrowserOAuthClient({
  handleResolver: 'https://bsky.social',
  // Only works if the current origin is a loopback address:
  clientMetadata: undefined,
})

const userHandle = ref('')

const onLoginClick = async () => {
  try {
    await client.signIn(userHandle.value);
    console.log(client)
  } catch (error) {
    console.log(error)
  }
}


</script>

<template>
  <div class="items-center justify-center w-full h-screen  flex border-4">
    <form>
      <Card class="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle class="text-2xl">
            Login
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="userHandle" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full" type="button" @click="onLoginClick">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  </div>
</template>
