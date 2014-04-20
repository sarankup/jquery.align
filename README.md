jquery.align
============

Critical alignments in HTML for Prose like alignments


Introduction
------------

When typeset contents such as prose, programming code, etc., using typesetting softwares such as InDesign, Quark, etc., non-breaking or TAB space used to aling content which requies to align vertically. Unfortunately, TAB feature is not supported in HTML. So, most of the cases non-breaking space are used. But every font has its own width for non-breaking character. When typeset contents are published as HTML online, all the time the font used  in the typset application vary when published in HTML online. Though, the non-breaking spaces are preserved in XML/HTML, when online used different font, then the alignment does not match with the typeset PDF pages.


Can Monospaced fonts help?
---------------------------

When we use monospaced fonts (eg. Courier) in both typesetting and HTML online, of course both PDF and HTML will match exactly when we preserve non-breaking or space character. But, most of the cases monospaced fonts used in programming codes but not for other environments.


Solution
--------

This 1KB JavaScript used jquery, and align you contents respective to any characters.


Demo
----

I am preparing demo at ....


Setup
-----

Import jquery script from any available CDN. In my example, I use Google CDN, as I like Google.

<pre> &lt;script src="http://code.jquery.com/jquery-1.8.2.min.js"&gtl;&lt;/script&gt;</pre>
<pre>&lt;script src="jquery.align.js"&gt;&lt;/script&gt;</pre>
