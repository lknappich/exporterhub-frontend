<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Impressum (Legal Notice)</h1>
    <p class="text-sm text-text-secondary mb-8">As required by &sect;5 TMG (German Telemediengesetz)</p>

    <section class="space-y-6 text-text-secondary leading-relaxed">
      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Information pursuant to &sect;5 TMG</h2>
        <div class="card p-6">
          <p class="font-semibold text-text-primary">Lukas Knappich</p>
          <p class="mt-2">[Street Address]<br>[Postal Code, City]<br>Austria</p>
          <p class="mt-3">
            <span class="text-text-primary font-medium">Email:</span> imprint@exporterhub.io
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Supervisory Authority</h2>
        <p>The competent supervisory authority for data protection matters is:</p>
        <p class="mt-2 ml-4">
          [Data Protection Authority Name]<br>
          [Address]<br>
          [Contact details]
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">EU Dispute Resolution</h2>
        <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" class="text-accent hover:text-accent-hover underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
        <p class="mt-2">We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Liability for Content</h2>
        <p>As a service provider, we are responsible for our own content on these pages in accordance with &sect;7 Abs.1 TMG under the general laws. According to &sect;&sect;8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
        <p class="mt-2">Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove this content immediately.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Liability for Links</h2>
        <p>Our Service contains links to external third-party websites, the content of which we have no influence over. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not discernible at the time of linking.</p>
        <p class="mt-2">However, permanent monitoring of the content of the linked pages cannot be reasonably expected without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Copyright</h2>
        <p>The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.</p>
        <p class="mt-2">The exporter source code available through links on this website is licensed under the MIT License. For details, please refer to the individual repository licenses on GitHub.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Trademarks</h2>
        <p>Prometheus, Grafana, Docker, and other product names mentioned on this website may be trademarks or registered trademarks of their respective owners. The use of these names is for identification purposes only and does not imply endorsement.</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Responsible for Content pursuant to &sect;55 Abs. 2 RStV</h2>
        <p>Lukas Knappich<br>[Address as above]</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-text-primary mb-3">Applicable Law</h2>
        <p>This legal notice and all legal relationships arising from the use of this website are governed by the laws of the Republic of Austria, without regard to its conflict of law provisions. The place of jurisdiction is [City], Austria.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'legal',
})

useHead({
  title: 'Impressum — Exporter Hub',
})
</script>