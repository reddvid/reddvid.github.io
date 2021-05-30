# Flutter Coding


I've heard about Flutter a long time ago but never actually used it or read in-depth about it. But I knew it was a UI framework from Google which uses a single code-base for mobile and web apps.

As you may know now, I developed some apps for Android and iOS using their native languages - Java and SwiftUI - and not a single-codebase language like Flutter. But I did try to code the RPN Radio app using Xamarin.Forms but the implementation of the Audio Players s\*cks a$$ to be honest.

Coding with their native languages was just a personal challenge for me being tech-savvy and wanted to experiment and dive myself to their "native world".

# Android and Bad (Java) Code

The Android Java code stuff was working - well, not that well - the implementation of the player was frequently bugged that it causes the app to crash. I tried several work arounds to the code to prevent the nasties, until I realized this is bad code.

To satisfy myself, and the users, I challenged myself to rebuild the app using Flutter.

Ever since March started, I started reading about Flutter and did some basic UI.

But first, let me tell you how I installed Flutter on Windows.

# Pre-installation (Pre-requisites?)

- Make sure you have Git on your device. I installed Git for Windows
- I've had Android Studio installed on my system ever since I coded for Android, which is also a recommended IDE for Flutter.
- Some Android SDKs and;
- Google Chrome browser.

# Installation

I pretty much followed the recommended guide as stated here: [Install Flutter (Windows)](https://flutter.dev/docs/get-started/install/windows). But instead of `C:\src\flutter`, I put it a level higher like this: `C:\flutter`.

Then added environment variable to Path. <- This part is important if you want to run flutter commands in the command line

Ran `flutter doctor` until all requirements are check out

# IDE, wait...

My IDE of choice is Android Studio, so I can use the emulators I already created and to avoid any additional setup when choosing another.

Upon opening the IDE, it was said that creating a new Flutter project should be there on the menu screen but it was missing!

Even though `flutter doctor` checked everything, I was disappointed that I can't start right away. Scraping the internet for solutions, I checked Android Studio's configuration and there, I downloaded some Flutter and Dart plugins which after a software restart, I can now create a new Flutter project.

<figure class="image">
<img src="/images/03-21/flutter/android-studio-flutter.png" style="display:block;margin-left:auto;margin-right:auto;width:80%;">
<figcaption><em>New Flutter Project</em></figcaption>
</figure>
<br/>

Since, the app I am planning to rebuild in Flutter is single-paged, it is a good starting-point to play around the Flutter widgets.

Coming from XAML, where everything seems "as is", I am so uncomfortable about coding UI using script-like codes. But having started SwiftUI for a few weeks, I pretty much can stand it. 😅

<figure class="image">
<img src="/images/03-21/flutter/ui-code.png" style="display:block;margin-left:auto;margin-right:auto;width:80%;">
<figcaption><em>Flutter UI Code</em></figcaption>
</figure>
<br/>

# Beginning

Being the beginner, again, I am on my way to building to much more with Flutter with prettier code and nicer implementations.

I am now reading some books and watching some tutorials on YouTube to help me advance a little more each day.

Ever since February began, I have been active to coding again. Learning new stuff that I do enjoy!

Thanks for reading my blog post, and will share some updates on how I would use Flutter sometime soon! Always take care peeps!

