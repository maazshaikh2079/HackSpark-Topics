#AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c


curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
   }'