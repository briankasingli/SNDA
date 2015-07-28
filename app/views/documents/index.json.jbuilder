json.array!(@documents) do |document|
  json.extract! document, :id, :document
  json.url document_url(document, format: :json)
end
