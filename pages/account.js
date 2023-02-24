<div>
    <!-- Add scripts based on url -->
    <script type="module" src="{% link assets/js/init-github.js %}"></script>
    <script src="{% link assets/js/events.js %}"></script>
    
    {% case page.url %}
    {% when '/contests.html' %}
        <script type="module" src="{% link assets/js/contests.js %}"></script>
    {% when '/faqs.html' %}
        <script type="module" src="{% link assets/js/faqs.js %}"></script>
    {% endcase %}
</div>