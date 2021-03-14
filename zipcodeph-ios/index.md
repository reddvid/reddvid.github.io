# ZIP Code PH for iOS


# Let's Go

For the last few weeks, I spent my free time building my app, ZIP Code PH, for iOS using Apple's native language SwiftUI.

Using a mac, is not that hard anymore since I've test ran macOS Catalina on VirtualBox. I managed to run XCode and tried to tinker with the language and built some UI mockups.

And luckily, the workplace has acquired a mac mini to cater Apple users for our apps (which is coming as soon as possible). I will also be the one developing the iOS apps, so check them out soon.

# Development

## Main and About Page

I am fairly new to SwiftUI so converting? the codes I used for Windows and Xamarin Android app - XAML and C# - will be useless. It took a few days to build the bare UI. I started with the Main Page and the Help page since they don't consume a lot of code-behind.

The Main Page took a lot of iterations but below is the final view (as of this writing):

<figure class="image">
<img src="/images/03-21/zipcodeph-ios/mainpage.png" style="display:block;margin-left:auto;margin-right:auto;width:40%;" alt="ZIP Code PH iOS Main Page Screenshot">
<figcaption><em>Main Page</em></figcaption>
</figure>
<br/>

The Help/About Page contains the same details I used in the Android app except that I added attributions to the new images in the Main Page (thanks <a href="https://unsplash.com/" target="_blank">Unsplash!</a>)

<figure class="image">
<img src="/images/03-21/zipcodeph-ios/about-1.png" style="display:inline;margin-left:auto;margin-right:auto;width:40%;" alt="ZIP Code PH iOS About Page Screenshot">
<img src="/images/03-21/zipcodeph-ios/about-2.png" style="display:inline;margin-left:auto;margin-right:auto;width:40%;" alt="ZIP Code PH iOS About Page Screenshot 2">
<figcaption><em>Help & About Page</em></figcaption>
</figure>
<br/>

## Search Page

Next up is the Search Page, I coded this before the menus since the code-behind logic is much simpler since we will use all the zip codes instead of filtering them to areas.

I didn't explorer SwiftUI that much but I found this code to build the Search bar iOS-style:

<figure class="image">
<img src="/images/03-21/zipcodeph-ios/searchbar.png" style="display:inline;margin-left:auto;margin-right:auto;width:60%;" alt="ZIP Code PH iOS Search Bar Screenshot">
<figcaption><em>iOS Search Bar</em></figcaption>
</figure>
<br/>

```swiftui
HStack {
    TextField("Search ZIP Code PH", text: $text)
        .padding(7)
        .padding(.horizontal, 25)
        .background(Color(.systemGray6))
        .cornerRadius(8)
        .overlay(
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.gray)
                    .frame(minWidth: 0, maxWidth: .infinity, alignment: .leading)
                    .padding(.leading, 8)

                if isEditing && !self.text.isEmpty {
                    Button(action: {
                        self.text = ""
                    }) {
                        Image(systemName: "multiply.circle.fill")
                            .foregroundColor(.gray)
                            .padding(.trailing, 8)
                    }
                }
            }
        )
        .padding(.horizontal, 20)
        .onTapGesture {
            self.isEditing = true
        }

    if isEditing {
        Button(action: {
            print(self.$text)
            self.isEditing = false
            self.text = ""
            // Dismiss the keyboard
            UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
        }) {
            Text("Cancel")
        }
        .padding(.leading, -10)
        .padding(.trailing, 10)
        .transition(.move(edge: .trailing))
        .animation(.easeInOut)
    }
}
```

<br/>
<video muted width="280" controls style="display:block;margin-left:auto;margin-right:auto;">
  <source src="/videos/03-21/zipcodeph-ios/searchpage.mp4" type="video/mp4">
</video>
<br/>

I spent a few times making the search (filtering) logic work the way I wanted that I almost gave up with SwiftUI programming 😅

## Menu and Area List Page

After understanding the filtering code while developing the Search Page, it is time to code the Menu and Area pages. The UI looks a lot like the Android counterpart but the built in Title style for iOS makes the UI better by collapsing the title to inline when scrolled. This is how it looks like on version 1.0.4

<figure class="image">
<img src="/images/03-21/zipcodeph-ios/area.png" style="display:inline;margin-left:auto;margin-right:auto;width:40%;" alt="ZIP Code PH iOS City and Area Page Screenshot">
<figcaption><em>City and Area Pages</em></figcaption>
</figure>
<br/>

## Favorites

Now the challenge begins, how to implement favorites - saving and loading data - while making the UI flexible when an item is added to favorites.

After more than a week of mind-bending development, I made it to work with the help of stackoverflow 😅. (Every developer use it, right? Right?)

<video muted width="280" controls style="display:block;margin-left:auto;margin-right:auto;">
  <source src="/videos/03-21/zipcodeph-ios/favorite.mp4" type="video/mp4">
</video>
<br/>

# Showcase

Below are the app showcase which you can see on the App Store as soon as the app is available

<style>

div#gallery-zipcodephios {
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

div#gallery-zipcodephios a {
  width: 20%;
  margin: 5px;
}

</style>

<div id="gallery-zipcodephios">
{{< image src="/images/03-21/zipcodeph-ios/gallery/color-mode.png" alt="Light and Dark Mode" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/favorites.png" alt="Favorites Page" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/search.png" alt="Search Page" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/trivia.png" alt="Trivias" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/ncr-and-luzon.png" alt="NCR and Luzon" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/visayas.png" alt="Visayas" >}}
{{< image src="/images/03-21/zipcodeph-ios/gallery/mindanao.png" alt="Mindanao" >}}
</div>

# You Can Get it Soon

The app can be tested and I will share the TestFlight link soon. I am still fixing some minor issues and will announce the availability on a new blog post.

For the meantime, the app is still available for Android and Windows 10.

You can check the blog posts here for the download links:
<br/>
<a href="/zipcodeph-android-dark-mode/">ZIP Code PH for Android gets Dark Mode
</a>
<br/>
<a href="/zipcodeph-new-ui/">ZIP Code PH Gets Refreshed UI</a>

