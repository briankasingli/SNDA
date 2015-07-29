json.array!(@ndas) do |nda|
  json.extract! nda, :id, :user_id, :nda
  json.url nda_url(nda, format: :json)
end
