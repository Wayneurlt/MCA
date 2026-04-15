<script setup lang="ts">
import { campaign } from '~/site/campaign'

useHead({
  title: `${campaign.candidate.fullName} | MCA ${campaign.candidate.ward}`,
  meta: [
    {
      name: 'description',
      content: campaign.bio.intro,
    },
  ],
})
</script>

<template>
  <div>
    <CampaignHeader :candidate="campaign.candidate" />
    <main>
      <CampaignHero :candidate="campaign.candidate" />
      <CampaignAbout :bio="campaign.bio" />
      <CampaignPriorities :priorities="campaign.priorities" />
      <CampaignValues :values="campaign.values" />
      <CampaignContact :contact="campaign.contact" :cta="campaign.cta" />
    </main>
    <CampaignFooter
      :name="campaign.candidate.fullName"
      :ward="campaign.candidate.ward"
      :county="campaign.candidate.county"
    />
  </div>
</template>
