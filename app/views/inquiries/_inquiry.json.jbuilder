json.extract! inquiry, :id, :user_id, :text, :created_at, :updated_at
json.url inquiry_url(inquiry, format: :json)
json.user_roles inquiry.user_roles unless inquiry.user_roles.empty?
