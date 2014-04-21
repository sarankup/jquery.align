jquery.align
============

Critical alignments in HTML for Prose like alignments


Introduction
------------

When typeset contents such as prose, programming code, etc., using typesetting softwares such as InDesign, Quark, etc., non-breaking or TAB space used to aling content which requies to align horizontally. Unfortunately, TAB feature is not supported in HTML. So, most of the cases non-breaking space is used. But every font has its own width for non-breaking character. The font used  in the typsetting application vary when published in HTML online. Though, the non-breaking spaces are preserved in XML/HTML, when online used different font, then the alignment does not match with the typeset PDF pages.


Can Monospaced fonts help?
---------------------------

When we use monospaced fonts (eg. Courier) in both typesetting and HTML online, of course both PDF and HTML will match exactly when we preserve non-breaking or space character. But, most of the cases monospaced fonts used in programming codes but not for other environments.


Solution
--------

This 1KB JavaScript used <a href='http://jquery.com/download/'>jquery</a>, and align you contents respective to any characters.


Demo
----

Demo demo <a href='http://jsfiddle.net/sarankup/6QHat/7/embedded/result/'>JSFiddle full page mode</a>.

Demo <a href='http://jsfiddle.net/sarankup/6QHat/7/'>JSFiddle code page mode</a>.


Setup
-----

Import jquery script from any available CDN. In my example, I use Google CDN, as I like Google.

<pre> &lt;script src="http://code.jquery.com/jquery-1.8.2.min.js"&gt;&lt;/script&gt;</pre>
<pre>&lt;script src="jquery.align.js"&gt;&lt;/script&gt;</pre>


How it works
------------

As HTML5 offers user defined attributes for elements in prefix with <font face="courier">data-foo</font>, I use <font face="courier">data-grid</font> in my example. Of course, you can use any attributes like <font face="courier">data-*.</font> For those to be aligned horizontally, insert <font face="courier">&lt;span data-grid='a'&gt;</font>. In result, wherever data-grid='a' used will align horizontally. Please make sure that the attribut value vary for each horizontal alignments. Please refer the index.html document.


Dependancy
----------

<a href='http://jquery.com/download/'>jquery</a> used as dependancy.


To Do
------

As this uses Jquery, using this for ePub may be heavier. Plain JavaScript to be written for ePub implementation.
