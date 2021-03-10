# Tune In RPN Radio Update


I updated the tune-in website for RPN. This post will detail the changes, what's new or removed, and how the update went.

# MainPage and Mobile-First Design

The main page remains got a few changes, starting with the font face and size. Before the update, the font family forced to check for <a href="https://www.marksimonson.com/fonts/view/proxima-nova" target="_blank">Proxima Nova</a> and fallback to Arial Nova or other <a href="https://en.wikipedia.org/wiki/Sans-serif" target="_blank">sans serif fonts.</a>

Then I cleaned up my CSS file to make the whole website <a href="https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00" target="_blank">"mobile-first".</a>
<br/>
<br/>

# Now Playing Station Pages
The tune-in or now playing page received most of the update. I've broken some of them below:

## Back Button
The back button got a lot of love with some logic. At first, the button always takes you to the home (main) page with the <code>\<a></code> tag attribute <code>href="/"</code>.

Now, it's got a javascript code that checks for an open navigation menu, and whether the history came from the tunein.rpnradio.com domain.

<pre><code>function goBack() {
  if (isNavOpen) {
    closeNav();
  }
  else if (document.referrer == "") {
    window.location.href = "https://tunein.rpnradio.com/";
  }
  else {
    window.history.back();
  }
}; </code></pre>

This logic was finalized when I opened a page link on my iPhone then the back button took me to the previous page - other site.

Now the back button takes you to home page when started with a station page.

## Navigation Menu
The station pages got a navigation menu that resembles the home page. This is to give the listener a continuous audio stream playback whilst needing to change a station.

Note: The navigation drawer will not work on browser back button - as I learned with other sites. The browser just simply go back to the previous page.
<br/>
<br/>

# Security
The website was also SSL-enabled - <a href="https://www.websecurity.digicert.com/security-topics/https-everywhere" target="_blank">HTTPS Everywhere.</a>

This also means that the old stream URLs will not work. Thankfully, the audio servers have secured stream URLs for secure websites.
<br/>
<br/>

# Open Graph Metadata
Social Media sites are the places where websites get the most referrers. So having metadata for them not just makes the website Facebook- or Twitter-friendly but it is a great addition to how it would look like when shared.

Making the images took waaaaay longer than I expected. I decided to add 3 mockup devices that shows the website on these devices. You can see the share preview below:

<figure class="image">
<img src="/images/02-21/tunein/ogrpn.png" alt="Tune In Open Graph Image for Homepage" style="width: 60%; ">
<figcaption><em>Facebook Open Graph Preview</em></figcaption>
<br/>
<img src="/images/02-21/tunein/ogstation.png" alt="Tune In Open Graph Image for Homepage" style="width: 60%; ">
<figcaption><em>Twitter Open Graph Preview</em></figcaption>
</figure>
Creating the metadata tags was made easy by using <a href="https://metatags.io/" target="_blank">Metatags.io</a>.
<br/>
<br/>

# Site Icons
I went on to also update the website's favicons, to differentiate tunein to the news website. It now has the Android app icon below:

<figure>
<img src="/images/02-21/tunein/radio_app.png" alt="Tune In Open Graph Image for Homepage" style="width: 20%; ">
<figcaption><em>Website Favicon</em></figcaption>
</figure>
<br/>

# Google Ads
I replaced the part suggesting other methods to tunein (Zeno app, Radio Garden and our native Android app) with a Google Auto ad.

We all hate ads but this is the only modest way to profit for most websites.
<br/>
<br/>

# .htaccess to Remove .html
I finally made it to work, shorten the address for site navigation. Instead of showing the full file name: <pre><small>tunein.rpnradio.com/batac.html</small></pre>
Some rules were added to the .htaccess file to make it <pre><small>tunein.rpnradio.com/batac</small></pre>

.htaccess file:
<pre><code>RewriteEngine On 
RewriteCond %{HTTPS} off 
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

RewriteCond %{THE_REQUEST} /([^.]+)\.html [NC]
RewriteRule ^ /%1 [NC,L,R]
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^ %{REQUEST_URI}.html [NC,L]
</code></pre>
<br/>

# Footer Finally
I added a subtle footer to the whole website. That's it. :)
<br/>
<br/>

# Final Words
This website is another medium for the company's aim for a greater reach by expanding to Digital Media. In addition to our native apps (which is available for Android - <a href="https://play.google.com/store/apps/details?id=com.rpnradio.radiov1&hl=en&gl=US" target="_blank">Google Play Store</a> and <a href="https://appgallery.huawei.com/#/app/C103076031" target="_blank">Huawei App Gallery</a>), the website also serves a means for our audiences to access our stations' broadcast anytime and anywhere in the world. 

You can visit the website here: <a href="https://tunein./rpnradio.com/" target="_blank">Tune In — RPN Radio.</a>

You may also want to check my blog post about the RPN Radio App here:<br/><a href="/rpnradio-android/">RPN Radio: Streaming App for Android.</a>
