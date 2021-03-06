(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-2"]
                  [adzerk/boot-reload        "0.4.13"]
                  [hoplon/javelin "3.9.0"]
                  [hoplon/hoplon             "6.0.0-alpha17"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.293"]
                  [tailrecursion/boot-jetty  "0.1.3"]
                  [thi.ng/ndarray "0.3.2"]
                  [thi.ng/color "1.2.0"]
                  [cljsjs/pixi "4.0.3-0"]
                  [cljsjs/tween "16.3.1"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(let [compiler-options {:foreign-libs [{:file "https://cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js"
                                        :provides ["scrollto.lib"]
                                        :requires ["hoplon.jquery"]}]}]

 (deftask front-dev
  "Build for local development."
  []
  (comp
   (watch)
   (speak)
   (hoplon)
   (reload)
   (cljs :compiler-options compiler-options)
   (serve :port 8000)))

 (deftask gh-pages
  "Build for production deployment."
  []
  (comp
   (hoplon)
   (cljs :compiler-options compiler-options)
   (target :dir #{"gh-pages"}))))
